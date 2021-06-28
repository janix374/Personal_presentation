@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Edit Project</h3>
    <form method="POST" action="/projects/{{$project->id}}">
    @csrf
    {{ method_field('put') }}
    <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" placeholder="title" name="title" value="{{$project->title}}">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Link</label>
        <input type="text" class="form-control" placeholder="link" name="link" value="{{$project->link}}">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Code</label>
        <input type="text" class="form-control" placeholder="code" name="code" value="{{$project->code}}">
    </div>
    <div class="form-group">
    <label>Description</label>
        <textarea class="form-control" rows="3" name="description" >{{$project->description}}</textarea>
    </div>
    <select class="form-control" name="nocode">
        <option value="1" >True</option>
        <option value="0" >False</option>
    </select>

  
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection