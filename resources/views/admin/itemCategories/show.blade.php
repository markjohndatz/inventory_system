@extends('layouts.admin.app')
@section('page-title','Show Item Categories')
@section('content')

<div class="card">
    <div class="card-header">
        <div class="row">
            <div class="col-md-8 col-12">
                <h4 class="m-0">
                    <h2><i class="fas fa-solid fa-toolbox me-2"></i>Item Category</h2>
                </h4>
            </div>
            <div class="col-md-4 col-12 text-right">
                <a href="{{ route('itemCategories.index') }}" class="btn btn-sm mx-2 btn-secondary float-end">
                    <i class="fa fa-solid fa-chevron-left"></i>
                    Back
                </a>
                <a href="{{ route('itemCategories.edit', $itemCategory->id) }}" class="btn btn-sm btn-secondary float-end">
                  <i class="fa fa-solid fa-edit"></i>
                  Edit
              </a>
            </div>
            
        </div>
    </div>

   
            <!-- Card for Item Information -->
            <div class="card">
                <div class="card-header">
                    <h3 class="text-uppercase bg-secondary p-2 text-light text-center">Item Information</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <!-- First column for Name -->
                        <div class="col-md-6 mb-3">
                            <h6 class="text-uppercase">Name:</h6>
                            <h4>{{ $itemCategory->name }}</h4>
                        </div>
    
                    </div>
                </div>
            </div>
       
    </div>
    
    </div>
      
       
    
</div>



@endsection