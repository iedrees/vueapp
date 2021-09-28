<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name')}}</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{ asset('assets/css/app.css') }}">
    </head>
    <body>
        <div id="webapp">
            <App/>
        </div>
        <script src="{{ asset('assets/js/app.js') }}"></script> 
    </body>
</html>
