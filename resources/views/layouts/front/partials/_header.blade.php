<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>@yield('page-title') | {{ config('app.name', 'Tabunok RBI System') }}</title>

  <link rel="shortcut icon" type="image/png" href="../assets/images/logos/favicon.png" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="{{ asset('assets/css/styles.min.css') }}" />
  <link rel="stylesheet" href="{{ asset('assets/css/custom.css') }}" />


  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
  <style>
        /* styles.css */
    body.dark-mode {
      background-color: #121212;
      color: #ffffff;
    }

    body.dark-mode .card {
      background-color: #1e1e1e;
      color: #ffffff;
    }

    body.dark-mode input.form-control {
      background-color: #333333;
      color: #ffffff;
      border: 1px solid #444444;
    }

    body.dark-mode .form-check-label {
      color: #bbbbbb;
    }

    body.dark-mode .btn-primary {
      background-color: #0056b3;
      border-color: #004085;
    }
  </style>


</head>

<body>