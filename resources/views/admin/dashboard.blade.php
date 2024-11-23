@extends('layouts.admin.app')
@section('page-title','Dashboard')   
@section('content')
<div class="row">
    {{-- Demographics --}}
    <div class="col-lg-8 d-flex align-items-strech" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="600">
      <div class="card w-100">
        <div class="card-body">
          <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
            <div class="mb-3 mb-sm-0">
              <h5 class="card-title fw-semibold"><i class="fa-solid fa-chart-simple me-2"></i>Wara gud</h5>
            </div>
          </div>
          <div id="chart"></div>
        </div>
      </div>
    </div>
    {{-- End of Demographics --}}

   

       
 
  
  <div class="py-6 px-6 text-center card-footer">
    <p class="mb-0 fs-4">Developed by <a href="" target="_blank" class="pe-1 text-primary text-decoration-none">Tambay</a></p>
  </div>
  

  
  
@endsection