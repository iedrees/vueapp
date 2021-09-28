const mix = require('laravel-mix');
require("laravel-mix-tailwind");


mix.js('webapp/app.js', 'public/assets/js').vue()
  

// mix.js("webapp/app.js', 'public/assets/js")


 mix.postCss("resources/css/app.css", "public/assets/css", [
 require("tailwindcss"),
]);
    
if (mix.inProduction()) {
    mix.version();
}