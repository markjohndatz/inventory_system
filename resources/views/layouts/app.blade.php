<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  {{-- <meta name="csrf-token" content="{{ csrf_token() }}">   --}}
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">

   <!-- Include DataTables -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/2.0.0/css/dataTables.dataTables.min.css">
   <!-- Include jQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/2.0.0/js/dataTables.min.js"></script>

           <!-- Dropify CSS-->
       <link rel="stylesheet" href="{{ asset('css/dropify.css') }}">
       

   
    <!-- Sweet alert & Axios CDN -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

     <!-- Bootstrap -->
    <link href="{{ asset('vendors/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="{{ asset('vendors/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <!-- NProgress -->
    <link href="{{ asset('vendors/nprogress/nprogress.css" rel="stylesheet') }}">
    <!-- bootstrap-wysiwyg -->
    <link href="{{ asset('vendors/google-code-prettify/bin/prettify.min.css') }}" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gzF2p4z4en1QQD1C2xe1IVYJxZcKm2ZK/NJn6kKLH8oD0b27UK3vOvqbrCtNPXmR" crossorigin="anonymous">


    <link href="{{ asset ('css/custom.min.css') }}" rel="stylesheet">
    

    <!-- Scripts -->
    {{-- @vite(['resources/sass/app.scss', 'resources/js/app.js']) --}}

    <style>
    .btn.btn-primary a {
        color: white; /* Set text color to white */
        text-decoration: none; /* Remove underline */
    }
</style>
  
</head>
<body class="nav-md bg-white">
    <div class="container body">
          <div class="main_container">
            <div class="col-md-3 left_col">
              <div class="left_col scroll-view">
                {{-- <div class="navbar nav_title custom-navbar" style="border: 0; background-color: #cdd4dc; display: flex; justify-content: center; align-items: center;">
                  <a href="home" class="site_title" style="text-align: center;"><span>RBI System</span></a>
                </div> --}}
               
              
    
                <div class="clearfix"></div>
    
                <!-- menu profile quick info -->
                {{-- <div class="profile clearfix">
                  <div class="profile_pic">
                    <img src="{{ asset('assets/image/tabunoklogo.png') }}" alt="..." class="img-circle profile_img">
                  </div>
                  <div class="profile_info">
                    <h4>Barangay Tabunok</h4>
                    <h2>
                        {{ Session::get('USERNAME') }}
                    </h2>
                  </div>
                </div> --}}
                <div class="text-center" style="margin-top:20px;">
                  <div style="display: flex; align-items: center;">
                    <img src="{{ asset('assets/image/tabunoklogo.png') }}" alt="tabunoklogo" style="width: 55px;">
                    <h2 style="color: #ffffff; margin-left:10px;">Barangay Tabunok</h2>
                </div>
                
                  <h2 style="color: #ffffff;">
                    {{ Session::get('USERNAME') }}
                  </h2>
              </div>
                <!-- /menu profile quick info -->

    
                <br />
    
                <!-- sidebar menu -->
                @include('layouts.admin-partials._sidebar')
                <!-- /sidebar menu -->
    
                
              </div>
            </div>
    
            <!-- top navigation -->
           
            @include('layouts.admin-partials._topbar')
            <!-- /top navigation -->
            
            <!-- page content -->

         <div class="right_col" role="main">
             <div class="">
    
      
                  <main class="py-4" >
                    @yield('content')
                </main>

            </div>
         </div>

            <!-- /page content -->
    
            <!-- footer content -->
            <footer>
              <div class="pull-right">
                Registry of Barangay Inhabitatns <a href="https://facebook.com/andre.buenafe33">Brgy. Tabunok</a>
              </div>
              <div class="clearfix"></div>
            </footer>
            <!-- /footer content -->
          </div>
     </div>
    

        
        @include('layouts.admin-partials._script')
</body>
</html>