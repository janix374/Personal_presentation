@extends('layouts.app')

@section('content')
<div class="container">
    <h3>Create new Project</h3>
    <form action="/projects" method="post">
    @csrf
    <div class="form-group">
        <label for="exampleInputEmail1">Title</label>
        <input type="text" class="form-control" placeholder="title" name="title">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Link</label>
        <input type="text" class="form-control" placeholder="link" name="link">
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Code</label>
        <input type="text" class="form-control" placeholder="code" name="code">
    </div>
    <div class="form-group">
    <label>Description</label>
        <textarea class="form-control" rows="3" name="description"></textarea>
    </div>
    <select class="form-control" name="nocode">
        <option value="1" >True</option>
        <option value="0" >False</option>
    </select>

  
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection