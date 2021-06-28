@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">User Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in as User
                </div>
                <hr/>
                <div class="m-4">
                <a href="/projects/create" class="btn btn-primary">Create new project</a>
                </div>

                <div class="row justify-content-center">
                <h3>List of Projects</h3>
                    <div class="col-md-12">
                        @if(count($projects) > 0)
                            @foreach($projects as $item)
                                <div class="row">
                                    <div class="col-sm-12">
                                        <p><span class="text-info">Title:</span> <span><a href="projects/{{$item->id}}" class="text-danger">{{$item->title}}</a></span></p>
                                        <p><span class="text-info">Description:</span> {{$item->description}}</p>
                                        <p><span class="text-info">Link:</span> {{$item->link}}</p>
                                        <p><span class="text-info">Code:</span> {{$item->code}}</p>
                                    </div>                             
                                </div>
                                <hr/>
                            @endforeach
                        @else
                            <p>No posts found</p>
                        @endif
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
@endsection
