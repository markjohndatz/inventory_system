@extends('layouts.admin.app')
@section('page-title','Items')
@section('content')
  <div class="card">
    <div class="card-header">
        <div class="row">
            <div class="col-md-6 col-12">
              <h2><i class="fa fa-solid fa-toolbox me-2"></i>Items</h2>
             </div>
            <div class="col-md-6 col-12 text-md-right">
              <div class="btn btn-outline-primary float-end">
                <a href="{{ route('items.create') }}">
                    <i class="fa fa-solid fa-toolbox"></i>
                    Add New Item
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
        <table class="table table-bordered table-hover table-striped" id="items-table">
          <caption>Table Items</caption>
          <thead>
              <th scope="col">Action</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
          </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</div>

@include('admin.items.partials._scripts')

@endsection
