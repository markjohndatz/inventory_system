<!-- Sidebar Start -->
<aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div>
      <div class="brand-logo d-flex align-items-center justify-content-between">
        <a href="/admin" class="text-nowrap logo-img" title="Index">
          <img src="{{ asset('assets/img/Dota-logo.png') }}" width="100" alt="logo" />
        </a>
        <div class="d-flex align-items-center">
          <strong>Inventory System</strong>
        </div>
        <div class="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
          <i class="ti ti-x fs-8"></i>
        </div>
      </div>
      
      <!-- Divider -->
      <hr class="sidebar-divider m-0 p-0">
      <!-- End of Divider -->

      <nav class="sidebar-nav scroll-sidebar" data-simplebar="">
        <ul id="sidebarnav">
          <li class="sidebar-item {{ request()->is('admin*') ? 'active' : '' }} mt-2">
            <a class="sidebar-link" href="" aria-expanded="false" title="Dashboard">
              <span>
                <i class="ti ti-layout-dashboard"></i>
              </span>
              <span class="hide-menu">Dashboard</span>
            </a>
          </li>
  
 
         
          <li id="Item-link" class="sidebar-item">
            <a class="sidebar-link " aria-expanded="false" title="Item">
              <span>
                <i class="fa-solid fa-toolbox"></i>
              </span>
              <span class="hide-menu">Item</span>
            </a>
          </li>
         
          
          
          <li id="Item-Category-link" class="sidebar-item">
            <a class="sidebar-link " aria-expanded="false" title="Item-Category">
              <span>
                <i class="fa-solid fa-clipboard-list"></i>
              </span>
              <span class="hide-menu">Item Category</span>
            </a>
          </li>
          
  
   
          
      </nav>
      <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
  </aside>
  