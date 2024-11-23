@include('layouts.admin.partials._header')
    <!--  Header End -->
    <div class="container-fluid">
      <!--  Row 1 -->
      {{-- @if ( Session::get('USERIMAGE') == 'No Image')
      <div class="card-footer">
        <div class="alert alert-primary d-block" style="">
            <strong>Notice:</strong>
            <p>
            Your account doesn't have a (<code>profile picture</code>), to update click on the following button.
            <a href="{{ route('show_profile_image_form') }}" class="btn btn-primary mb-1" style="margin-top: -7px">
              <i class="fa-sharp fa-regular fa-pen-to-square"></i>
              Upload Profile Image
            </a>
            </p>
        </div>
        </div>
      @else
      
      @endif --}}
      @yield('content')
    </div>

@include('layouts.admin.partials._footer')