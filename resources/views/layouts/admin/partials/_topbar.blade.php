<header class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item d-block d-xl-none">
          <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
            <i class="ti ti-menu-2"></i>
          </a>
        </li>
      </ul>
      <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
        <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">
          <li class="nav-item dropdown">
  
            <a class="nav-link nav-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
              aria-expanded="false">
  
                <span class="me-2 d-none d-lg-inline text-white-900 small">{{ Session::get('USERNAME') }}</span>
                  @if ( Session::get('USERIMAGE') === 'No Image')
                    <img src="{{ asset('/assets/img/user-placeholder.jpg') }}" alt="Profile Image Placeholder" width="35%" height="35" class="img-profile rounded-circle">
                    @elseif (Session::get('USERIMAGE') === null )
                    <img src="{{ asset('/assets/img/user-placeholder.jpg') }}" alt="Profile Image Placeholder" width="35%" height="35" class="img-profile rounded-circle">
                    @else 
                    <img src="{{ asset('/storage/images/' . Session::get('USERIMAGE')) }}" alt="Profile Image Placeholder" width="35" height="35" class="img-profile rounded-circle">
                  @endif
                 
            </a>
           <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
              <div class="message-body">
                <a href="#" class="d-flex align-items-center gap-2 dropdown-item">
                  <i class="ti ti-user fs-6"></i>
                  <p class="mb-0 fs-3">My Profile</p>
                </a> 
                <a class="btn btn-outline-primary mx-3 mt-2 d-block" href="{{ route('logout') }}"
                onclick="event.preventDefault();
                              document.getElementById('logout-form').submit();">   
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <span class="mb-0 fs-3">{{ __('Logout') }}</span>
               </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                  @csrf
              </form>
              </div>
            </div> 
            
          </li>
        </ul>
      </div>
    </nav>
  </header>