<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ItemCategory;
use Illuminate\Validation\ValidationException;
use Yajra\DataTables\DataTables;
use Illuminate\Support\Facades\DB;

class ItemCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            // Now we can just call generateDatatables without passing extra parameters
            return $this->generateDatatables($request); 
        }

        return view('admin.itemCategories.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.itemCategories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
           
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
            ]);
    
           
            $itemCategory = new ItemCategory();
            $itemCategory->name = $validatedData['name'];
            $itemCategory->save();
    
           
            $message = 'Item created successfully!';
    
           
            return redirect()->route('itemCategories.index')->with([
                'itemCategory' => $itemCategory,
                'success' => $message,
            ]);
        } catch (ValidationException $e) {
           
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $itemCategory = ItemCategory::where('id','=',$id)->first();

        return view('admin.itemCategories.show')->with(['itemCategory'=>$itemCategory]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $itemCategory = ItemCategory::findOrFail($id);

        return view('admin.itemCategories.edit', compact('itemCategory'));
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
        try {
           
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
            ]);
    
           
            $itemCategory = ItemCategory::findOrFail($id);  // This will throw a 404 if the item is not found

            // Update the item's properties with validated data
            $itemCategory->name = $validatedData['name'];
            
            // Save the updated item
            $itemCategory->save();
           
            $message = 'Item updated successfully!';    
           
            return redirect()->route('itemCategories.index')->with([
                'itemCategory' => $itemCategory,
                'success' => $message,
            ]);
        } catch (ValidationException $e) {
            // If validation fails, return with error messages and previous input
            return redirect()->back()->withErrors($e->errors())->withInput();
        } catch (\Exception $e) {
            // Catch any other unexpected errors
            return redirect()->back()->withErrors('Something went wrong.')->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            // Find the item by ID
            $itemCategory = ItemCategory::findOrFail($id);
            
            // Delete the item
            $itemCategory->delete();
    
            // Return a success response
            return response()->json(['success' => 'Item deleted successfully.']);
            
        } catch (\Exception $e) {
            // Return an error response if deletion fails
            return response()->json(['error' => 'Failed to delete item.'], 500);
        }
    }

    public function generateDatatables(Request $request)
    {
        // Use the query builder to handle pagination and server-side processing
        $itemCategory = ItemCategory::query();

        return DataTables::of($itemCategory)
            ->addColumn('actions', function($data) {
                $actionButtons = '<div class="btn-group rounded">
                                    <a href="' . route("itemCategories.show", $data->id) . '" class="btn btn-sm me-1 btn-secondary view-items" data-id="' . $data->id . '">
                                        <i class="fas fa-eye"></i>
                                    </a>
                                    <a href="' . route("itemCategories.edit", $data->id) . '" class="btn btn-sm me-1 btn-warning edit-items" data-id="' . $data->id . '">
                                        <i class="fas fa-edit"></i>
                                    </a>
                                    <button class="btn btn-sm btn-danger delete-items" onclick="confirmDeleteItems(' . $data->id . ')">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>';
                return $actionButtons;
            })
            ->rawColumns(['actions'])
            ->make(true); // This method makes sure DataTables can process the data correctly
    }
}
