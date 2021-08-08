const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.js('resources/js/app/index.js', 'public/js/')
    .react();

mix.postCss("resources/css/tailwind.css", "public/css", [
    require("tailwindcss"),
]);

mix.postCss('resources/css/bootstrap-icons.css', 'public/css/')
    .postCss('resources/css/fonts/poppins.css', 'public/css/fonts')

if (mix.inProduction()) {
    mix.version();
}