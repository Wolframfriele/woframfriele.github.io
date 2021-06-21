<style>
  footer {
    align-self: end;
    margin: 2em 0 0 0;
  }

  #copyright {
    margin: 2em 0;
  }

  ul {
    margin: 2em 0;
    padding: 0;
  }

  li {
    list-style: none;
    margin: .5em 0;
  }

  @media (min-width: 700px) {
    footer {
			display: grid;
			grid-template-columns:
				minmax(0, 1fr)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(0, 1fr);
			grid-gap: 25px;
		}

    #copyright {
      display: grid;
      grid-row: 1;
      grid-column: 2 / 4;
      justify-self: left;
      align-items: flex-end;
      margin: 2.5em 0;
    }

    #footer-links {
      grid-row: 1;
      grid-column: 6 / 8;
      justify-self: right;
    }

    h2 {
      text-align: right;
    }

    ul {
      display: flex;
      justify-content: right;
    }

    li {
      margin: 0 0 0 1em;
    }
  }
</style>

<footer>
  <div id="footer-links">
    <h2>Find me on_</h2>
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/in/wolframfriele"
          target="_blank"
          >LinkedIn</a
        >
      </li>
      <li>
        <a href="https://www.github.com/Wolframfriele" target="_blank"
          >GitHub</a
        >
      </li>
      <li>
        <a href="https://www.instagram.com/wolframfriele/" target="_blank"
          >Instagram</a
        >
      </li>
      <li>
        <a href="https://www.behance.net/wolframfriele" target="_blank"
          >Behance</a
        >
      </li>
      <li>
        <a href="https://www.twitter.com/Wolframfriele" target="_blank"
          >Twitter</a
        >
      </li>
      <!--
              <li><a href="https://medium.com/@wolframfriele">Medium</a></li>
              -->
    </ul>
  </div>
  <p id="copyright">Wolfram Friele 2021 &copy;</p>
</footer>