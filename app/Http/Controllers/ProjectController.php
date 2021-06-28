<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{

    // // apply auth middleware so only authenticated users have access
	// public function __construct() {
	// 	$this->middleware('auth');
	// }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::orderBy('id', 'desc')->get();
        return view('home')->with('projects', $projects);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $project = Project::create($request->all());
        // return response($project, 201);
        $this->validate($request, [
            'title' => 'required',
            'link' => 'required',
            'description' => 'required',
            'code' => 'required',
            'nocode' => 'required',
        ]);

        $project = new Project;
        $project->title = $request->input('title');
        $project->link = $request->input('link');
        $project->description = $request->input('description');
        $project->code = $request->input('code');
        $project->nocode = $request->input('nocode');
        $project->save();

        // $validatedData = request()->validate([
        //     'title' => 'required',
        //     'link' => 'required',
        //     'description' => 'required',
        //     'code' => 'required',
        //     'nocode' => 'required',
        // ]); 

        // Project::create($validatedData);

        return redirect('/projects')->with('success', 'Project Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::find($id);
        if(is_null($project)) {
            return response()->json(['message' => 'Project Not Found'], 404);
        }
        return view('projects.show')->with('project',$project);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::find($id);
        return view('projects.edit')->with('project',$project);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validatedData = request()->validate([
            'title' => 'required',
            'link' => 'required',
            'description' => 'required',
            'code' => 'required',
            'nocode' => 'required',
        ]);

        $project = Project::find($id);
        $project->title = $request->input('title');
        $project->link = $request->input('link');
        $project->description = $request->input('description');
        $project->code = $request->input('code');
        $project->nocode = $request->input('nocode');
        $project->save();
        // $project->update($validatedData);

        return redirect('/projects')->with('success', 'Project Updated');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if(is_null($project)) {
            return response()->json(['message' => 'Project Not Found'], 404);
        }
        $project->delete();
        return redirect('/projects')->with('success', 'Project removed');
    }
    
}
