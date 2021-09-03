<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Disability Care</title>
    <link rel="stylesheet" href="{{mix('/css/tailwind.css')}}">
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
    <link rel="stylesheet" href="{{mix('/css/bootstrap-icons.css')}}">
    <link rel="stylesheet" href="{{mix('/css/fonts/poppins.css')}}">

    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin=""
    />

    @laravelPWA
</head>
<body>
    <div id="root"></div>
    <script src="{{mix('/js/index.js')}}"></script>
</body>
</html>