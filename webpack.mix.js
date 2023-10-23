const mix = require('laravel-mix');
const tailwindcss = require("tailwindcss");

mix
.js('./src/scripts/index.js', 'app.js')
.sass('./src/styles/main.scss', 'app.css')
.setPublicPath('./web/dist/')
.options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")]
})
.version()
.browserSync("https://whitehouse.ddev.site/")
.options({
    hmrOptions: {
        host: 'localhost',
        port: 8080
    }
})