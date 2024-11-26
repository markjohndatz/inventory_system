@extends('layouts.admin.app')
@section('page-title','ItemCategory')
@section('content')
  <div class="card">
    <div class="card-header">
        <div class="row">
            <div class="col-md-6 col-12">
              <h2><i class="fa fa-solid fa-toolbox me-2"></i>Item Categories</h2>
             </div>
            <div class="col-md-6 col-12 text-md-right">
              <div class="btn btn-outline-primary float-end">
                <a href="{{ route('itemCategories.create') }}">
                    <i class="fa fa-solid fa-toolbox"></i>
                    Add New Category
                </a>
              </div>
          </div>            
        </div>
    </div>
    <div class="card-body">
        @if (session('success'))
          <div class="alert alert-success mx-2">
              {{ session('success') }}
          </div>
        @endif
        <table class="table table-bordered table-hover table-striped" id="itemCategories-table">
          <caption>Table Items</caption>
          <thead>
              <th scope="col">Action</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
          </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>

@include('admin.itemCategories.partials._scripts')

@endsection
