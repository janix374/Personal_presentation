@extends('layouts.app')

@section('content')
        <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <p><span class="text-info">Title:</span> {{$project->title}}</p>
                        <p><span class="text-info">Description:</span> {{$project->description}}</p>
                        <p><span class="text-info">Link:</span> {{$project->link}}</p>
                        <p><span class="text-info">Code:</span> {{$project->code}}</p>
                    </div> 
                    <div class="col-sm-12">
                        <a href="/projects/{{$project->id}}/edit" class="btn btn-warning">EDIT</a>
                        <form method="POST" action="/projects/{{$project->id}}">
                            {{ csrf_field() }}
                            {{ method_field('DELETE') }}

                            <div class="form-group">
                                <input type="submit" class="btn btn-danger delete-user" value="Delete">
                            </div>
                        </form>
                    </div>                             
                </div>
        </div>


@endsection