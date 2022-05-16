const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/',
    {
        branch: 'master',
        repo: 'https://github.com/Wolframfriele/wolframfriele.github.io.git',
        user: {
            name: 'Wolframfriele',
            email: 'wolframfriele@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
