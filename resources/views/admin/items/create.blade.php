@extends('layouts.admin.app')
@section('page-title','New Items')
@section('content')

        <div class="card">
            <div class="card-header">
                <h2><i class="fa fa-solid fa-toolbox me-2"></i>Create New Items</h2>
            </div>

           
                <div class="card-body">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul class="p-0 m-0">
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                    
                <form action="{{ route('items.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf   
                    <div class="card p-4">
                        <div class="row">
                        <!-- First Name -->
                            <div class="form-group mb-2 col-md-6 p-2">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" name="name" required value="{{ old('name')}}">
                        
                            </div>

                            <!-- Last Name -->
                            <div class="form-group mb-2 col-md-6 p-2">
                                <label for="description">Description</label>
                                <textarea class="form-control" id="description" name="description" rows="4" required>{{ old('description') }}</textarea>
            
                            </div>
                    
                            
                        </div>
                        
                    </div>
                                  
                   
                </div>
               
        </div>
        <div class="card-footer">
            <button type="submit" class="btn btn-success btn-sm me-1">Save</button>
            <a href="{{route ('items.index') }}" class="btn btn-secondary btn-sm">Cancel</a>
        </div>
    </form>
    

@endsection