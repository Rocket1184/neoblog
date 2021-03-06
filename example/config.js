module.exports = {
    // title of all HTML pages. Cannot be null.
    title: 'NeoBlog',
    // local server port. default to `2233` .
    port: process.env.PORT || 2233,
    // path to article directory. default to `./article` .
    articleDir: './article',
    // regular expression to match article file names. default to `/\.md$/`.
    articleExt: /\.(md|markdown|txt)$/,
    // number of articles per page. default to `10`.
    articlesPerPage: 10,
    // path to template directory. set `null` to use built-in template.
    templateDir: null,
    // plugins to load. At least an empty array.
    plugins: [
        require('./plugin/test-api-plugin'),
        require('./plugin/parse-txt-article')
    ],
    // arguments passed to template. can be anything but null.
    templateArgs: {
        // <html lang="">
        lang: 'en',
        head: {
            meta: [
                // charset, name, content, httpEquiv
                { charset: 'UTF-8' },
                { name: 'theme-color', content: '#333' },
                { httpEquiv: 'content-security-policy', content: "script-src 'self';" }
            ],
            link: [
                // as, rel, href, crossorigin, media, sizes, type, title
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,400italic' }
            ],
            script: [
                // async, defer, charset, src, type
                { src: '/assets/script.js' }
            ]
        },
        indexHeading: 'NeoBlog\'s default template theme',
        side: {
            title: 'NeoBlog',
            items: [
                [
                    { name: 'Index', link: '/' }
                ],
                { preset: 'tags' },
                [
                    { text: `OS: ${process.platform} ${process.arch}` },
                    { text: `Node: ${process.version}` }
                ]
            ]
        }
    }
};
