+++
title = "Typing Faster: Project set-up"
description = "Can typing speed be improved without completely re-learning a new system? This post lays out the start to a simple terminal based text editor that implements autocorrect."
date = 2024-04-13
+++

Typing fast is pretty useful as a developer, since almost anything you make is text based. Unfortunately I never learned how to properly touch type, so when I made a career switch to software development, touch typing was one of the first things I set out to learn. The location of backspace quickly became a nuisance and had me exploring alternatives. This quickly spiraled into learning about [split keyboards](https://github.com/foostan/crkbd), [alternative keyboard lay-outs](https://colemakmods.github.io/mod-dh/) and fewer and [fewer keys](https://www.youtube.com/watch?v=5RN_4PQ0j1A). It seemed sensible that if I was going to learn how to touch type, I should learn on a split keyboard. I'm currently at a speed of somewhere between 60 to 90 words per minute. This is higher than the average but probably pretty slow compared to the average developer.

When you spend some time in the custom keyboard scene, you eventually end up learning about stenography; The input method where typists use chords and reach speeds of around 250 wpm. A benefit of that raw speed that [is sometimes mentioned](http://plover.stenoknight.com/2010/06/raw-speed.html), is the fact that it allows you to keep up with your thoughts and stay in the flow. But after playing around with [plover](https://www.openstenoproject.org/plover/) (an open source stenography engine) for a little bit, I found the learning curve too steep. I didn't want to learn yet another system. But I did become curious about tooling that can help you type faster, without needing to start from scratch.

## Goals

While this project is mostly an excuse to play around with rust and explore spelling correction techniques, I'll also set some concrete goals to help guide decisions:
- The main goal is to prototype different text input methods in a terminal environment. The terminal has everything to handle user input and render text, and I have been curious about developing for it.
- Performance is important, there should be no lag when entering text (I'm looking at you VS Code), with a 60 Hz screen this requires a maximum update time of 16 ms.
- The tool would eventually need to work for normal text and for writing code, but I'll prioritize normal writing at first.
- As far as typing speed goals go: more faster more better, but it should at least be a 10% speed increase.

## Potential solutions

While researching potential ways to speed up text input, I found three different methods that I want to try out.

The first is auto correct. One of the major slowdowns while typing is correcting ducking errors. It's much faster if you don't have to go back and fix them. There are multiple ways to implement spelling correction. I want to start out experimenting with older and simpler techniques, like edit distance, but slowly work my way up to more modern methods like transformers.

Another potential solution has already been mentioned: chording. While official stenography has a steep learning curve, it might be possible to implement a less complete but easier chording system that still results in speed ups. I'm also curious if sentence context can be used to make chording simpler, such as using word prediction to require less complex chords.

The last option is predictive text. The jury is still out on [the effectiveness of predictive text](https://dl.acm.org/doi/10.1145/2858036.2858305), but that could be largely due to the way the UI works on a phone. In general the predicted words are placed above the keyboard and that is not where you are looking while typing. According to [Johnny Harris](https://www.youtube.com/watch?v=hBDwXipHykQ) predictive text has been successful in speeding up typing in China. Since autocorrect and predictive text have a lot of technical overlap, this will mostly be about experimenting with UX. 

## A testing environment

I recently started following the [kilo](https://viewsourcecode.org/snaptoken/kilo/) and [hecto](https://www.flenker.blog/hecto/) tutorials about building a terminal text editor and got excited about an opportunity to use that knowledge. I highly recommend following those at least partially, because they go over the project setup in a much more step-by-step fashion. This really teaches you what every line does.

Hecto uses [termion](https://docs.rs/termion/latest/termion/) to interact with the terminal, but termion is not cross platform.
So instead I use [crossterm](https://docs.rs/crossterm/latest/crossterm/index.html). This has the added benefit that I have to implement the underlying concepts, because I can't just copy the tutorial.

The basic setup consists of two files, all code can be found on github. I've dubbed the project [Zamboni](https://github.com/Wolframfriele/zamboni).
The file [`main.rs`](https://github.com/Wolframfriele/zamboni/blob/45d6c630e11f5859550da6583b86e5a3fdacd77b/src/main.rs) is simple:

```rust
#![warn(clippy::all, clippy::pedantic)]
mod editor;
use std::io;

use editor::Editor;

fn main() -> io::Result<()> {
    Editor::default().run()?;
    Ok(())
}
```
All it does is import the editor module (that lives in the second file), and executes the run command on the default editor. Because this is a prototype and I'm not planning to do actual work with it, I'm fine with the programming just crashing whenever there is an error (the [question mark operator](https://doc.rust-lang.org/reference/expressions/operator-expr.html#the-question-mark-operator) unwraps non-error values or crashes).

The second file [`editor.rs`](https://github.com/Wolframfriele/zamboni/blob/c6121d315da65a0e39070652cc497734474fd457/src/editor.rs) contains the rest of the code:

```rust
use std::char;
use std::io::{self, Stdout};
use std::time::{Duration, Instant};

use crossterm::event::{poll, read, Event, KeyCode, KeyEvent, KeyModifiers};
use crossterm::style::Print;
use crossterm::terminal::{self};
use crossterm::{cursor, execute};

...
```

The first few lines contain all the imports, lots of Crossterm goodness, that we'll get to later. Stdout is used to display the text, duration is used to set a poll rate and Instant is used for calculating how many words per minute a user types into the editor. This will come in handy later to roughly compare typing speeds between solutions.

### Setting up the editor

Everything for the editor is contained in a struct, it holds a variable that will tell the editor to quit, it holds a reference to Stdout, a buffer to store text and a time variable to calculate words per minute.

The first method, _default_, constructs the struct with, you guessed it, default values. The struct also has a setup and a cleanup method; when you normally interact with a terminal it is set to _cooked mode_. In this mode a user enters characters, hits enter and only at that point will the program process the input. This is great for entering commands, or building something like a classic guessing game. But editing text requires a quicker feedback loop, which can be achieved with _raw mode_. The kilo booklet [explains](https://viewsourcecode.org/snaptoken/kilo/03.rawInputAndOutput.html) what goes into setting up raw mode, but luckily for us Crossterm just has function called [_enable_raw_mode_](https://docs.rs/crossterm/latest/crossterm/terminal/index.html#raw-mode). After that we execute another convenient function: _EnterAlternateScreen_. This works similar to opening up neovim, where the terminal goes to a different screen. When you close neovim (if you know how) the terminal is back exactly how you left it.


```rust
...

pub struct Editor {
    should_quit: bool,
    stdout: Stdout,
    buffer: Buffer,
    start_time: Instant,
}

impl Editor {
    pub fn default() -> Self {
        Self {
            should_quit: false,
            stdout: io::stdout(),
            buffer: Buffer::default(),
            start_time: Instant::now(),
        }
    }

    fn setup(&mut self) -> io::Result<()> {
        terminal::enable_raw_mode()?;
        execute!(
            self.stdout,
            terminal::EnterAlternateScreen,
            cursor::MoveTo(0, 0),
        )?;
        Ok(())
    }

    fn cleanup(&mut self) -> io::Result<()> {
        execute!(self.stdout, terminal::LeaveAlternateScreen)?;
        terminal::disable_raw_mode()?;
        Ok(())
    }

...

}

...
```

The _clean_up_ method reverses all the steps and leaves a user with a usable terminal. You can experiment with leaving out some of these steps to see what they do. But keep in mind that if you don't enable raw mode you will need to exit the program by pressing "ctrl + c" (normally this is done with ctrl + q as set up in the next section). If you enable raw mode, but don't disable it, no characters will be echoed to the terminal even after exiting the program. This can be fixed by running the `reset` command in the terminal (the word reset won't be visible as you type it).

### Interacting with the editor

Now that we can set up the terminal in raw mode, we need to actually run the main loop for the program. This consists of three steps that are executed as long as the editor is running. First we read events, stuff like character input or resizing the terminal. By [polling](https://docs.rs/crossterm/latest/crossterm/event/index.html) events we make this loop non-blocking. Then we determine what each key press does in the _handle_input_ method by relying on Rust's great matching syntax. I mostly followed an [example](https://github.com/crossterm-rs/crossterm/blob/master/examples/event-match-modifiers.rs) provided by Crossterm. The first option matches the combination of character _q_ and modifier key _control_, and sets the should_quit value on the editor struct to true, breaking the main loop and exiting the program.

To delete an entire word "ctrl + h" is matched, because that is what my terminal outputs when pressing "ctrl + backspace". There is a chance that this is [different for you](https://mdleom.com/blog/2023/07/17/ctrl-h-backspace/). But correctly implementing a solution what works with all possible variations on ANSI Escape sequences seems a major pain and not worth it for a prototype. Lastly any other char is added to the text buffer so that it can be displayed on the screen.

```rust
...

impl Editor {

...
    pub fn run(&mut self) -> io::Result<()> {
        self.setup()?;
        while !self.should_quit {
            if poll(Duration::from_millis(500))? {
                let event = read()?;
                self.handle_input(&event);
                self.draw_screen(&self.buffer.render(), self.calculate_wpm())?;
            }
        }
        self.clean_up()?;
        Ok(())
    }

    fn handle_input(&mut self, event: &Event) {
        match event {
            Event::Key(KeyEvent {
                code: KeyCode::Char('q'),
                modifiers: KeyModifiers::CONTROL,
                ..
            }) => self.should_quit = true,
            Event::Key(KeyEvent {
                code: KeyCode::Char('h'),
                modifiers: KeyModifiers::CONTROL,
                ..
            }) => self.buffer.del_word(),
            Event::Key(KeyEvent {
                code: KeyCode::Backspace,
                ..
            }) => self.buffer.del_char(),
            Event::Key(KeyEvent {
                code: KeyCode::Char(c),
                ..
            }) => self.buffer.add_char(*c),
            _ => (),
        }
    }
    
    fn draw_screen(&mut self, text: &String, wpm: String) -> io::Result<()> {
        execute!(
            self.stdout,
            terminal::Clear(terminal::ClearType::All),
            cursor::MoveTo(0, 0),
            Print(wpm),
            cursor::MoveTo(0, 1),
            Print(text),
        )?;
        Ok(())
    }
    
    fn calculate_wpm(&self) -> String {
        format!(
            "WPM: {}",
            ((self.buffer.lenght() as f64 / 5.0)
                / (self.start_time.elapsed().as_secs() as f64 / 60.0)) as i32
        )
    }
}

...
```

Crossterm has [macros](https://docs.rs/crossterm/latest/crossterm/index.html#macros) to execute commands; because they are macros you can just stack a bunch of commands in one execute block. Convenient! The _draw_screen_ method first clears everything on screen. So for each user input the entire screen is wiped and re-drawn. Probably not the best for performance, but it keeps the implementation extremely simple.

The number of words per minute is calculated in the same way [monkeytype](https://monkeytype.com/about) does, with a bit of rather ugly but effective code.

### Storing the input

Because the terminal does not keep track of input text in raw mode, we need a way to store the user input ourselves. I setup a struct named Buffer that
contains some convenience methods over a String. The only method worth explaining is _del_words_ which just keeps deleting characters until it deletes a space. The `let Some(c) = self.main_text.pop() else { break }` makes sure that the program won't crash if the buffer is empty, but the loop is still trying to pop off a character.

```rust
...

struct Buffer {
    main_text: String,
}

impl Buffer {
    pub fn default() -> Self {
        Self {
            main_text: String::new(),
        }
    }

    pub fn add_char(&mut self, c: char) {
        self.main_text.push(c);
    }

    pub fn del_char(&mut self) {
        self.main_text.pop();
    }

    pub fn del_word(&mut self) {
        if self.main_text.ends_with(' ') {
            self.main_text.pop();
        }
        loop {
            let Some(c) = self.main_text.pop() else { break };
            if c == ' ' {
                self.main_text.push(' ');
                break;
            };
        }
    }

    pub fn render(&self) -> String {
        self.main_text.clone()
    }

    pub fn lenght(&self) -> usize {
        self.main_text.len()
    }
}
```

And that's all that is required to type text into the terminal and delete it! Not very useful by itself, but it will be the perfect playground to implement different tools to speed up text input.

I feel like this project let me peel back the curtain slightly on the complexity that is hidden in our terminals. It's fascinating to read [about the legacy](https://wezfurlong.org/wezterm/what-is-a-terminal.html) that is still present in modern day terminal emulators.

It's also just fun to type into a little program build by yourself!

The next post will look into extending the buffer with functionality to correct misspelled words without looking at sentence context.

If you have any corrections for this post feel free to make [an issue](https://github.com/Wolframfriele/wolframfriele.github.io/issues/new) on github. 
