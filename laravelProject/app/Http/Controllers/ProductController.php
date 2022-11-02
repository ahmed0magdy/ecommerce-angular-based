<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){

        return Product::orderBy('id', 'desc')->paginate(10);

    }

    public function show($productId){

        return Product::find($productId);

    }

    public function store(Request $request){

        if ($image = $request->file('image')) {
            $profileImage = date('YmdHis') . "." . $image->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('public/images', $profileImage);
            // $request->image = "$profileImage";
            $data = $request->all();
            return Product::create([
            'title' => $data['title'],
            'SKU' => $data['SKU'],
            'details' => $data['details'],
            'image' =>$path,
            'price' => $data['price'],
        ]);

        }
        else{
            return 'something went wrong!';
        }

        
    }


    public function edit($SKU){


        return $editProduct = Product::where('SKU', $SKU)->get()->first();

    }

    public function update(Request $request,$sku ){
            // $postId = Product::find($sku);
         $postId = Product::where('SKU', $sku)->get()->first();


        return  $postId->update([
            'title' => $request->title,
            'SKU' => $request->SKU,
            'details' => $request->details,
            'image' => $request->image,
            'price' => $request->price
        ]);

    }
    public function destroy($postId){
    $all = Product::find($postId);
    // Post::destroy($postId);

    return $all->delete();
}
}
