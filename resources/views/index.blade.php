<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>

        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->

        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
            html, body {
                margin: 0;
                font-family: 'Bangers', cursive;
            }
        </style>
        
    </head>
    <body >
        <div class="container">
             <div id="root"></div>
        </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
