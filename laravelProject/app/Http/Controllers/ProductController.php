<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){

        return Product::orderBy('id', 'desc')->get();

    }

    public function show($productId){

        return Product::find($productId);

    }

    public function store(){
        $data = request()->all();
        return Product::create([
            'title' => $data['title'],
            'SKU' => $data['SKU'],
            'details' => $data['details'],
            'image' => $data['image'],
            'price' => $data['price'],
        ]);

    }


    public function edit($postId){


        return $allPost = Product::find($postId);


    }

    public function update(Request $request,$id ){

            $postId = Product::find($id);


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
