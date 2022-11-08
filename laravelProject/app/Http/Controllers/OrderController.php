<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\User;
use App\Models\Order;
use App\Models\Product_Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
class OrderController extends Controller
{
    public function order(){
        //select DISTINCT title,qty,order_id,email from products,order_product,orders,users where order_product.product_id = products.id AND order_product.order_id = orders.id AND orders.user_id = users.id;
        $order =DB::table('orders as o')->join('users','users.id', '=' , 'o.user_id')->select('o.id','o.created_at','name','email','status')->get();

        return $order;
    }
    //SELECT p.id,title,qty,price from products p ,order_product where order_product.order_id = p.id
    public function orderview($orderId){
        $ordered =DB::table('products')->join('order_product','order_product.product_id', '=' , 'products.id')
        ->select('order_id','title','qty','price')->where('order_id',$orderId)->get();
//->select(DB::raw("SUM(student_marks) as count"))
        return $ordered;

    }

    public function updatestatus(Request $request,$orderId){
        $omega = Order::find($orderId);
        $omega->update([
            'status' => $request->status,
        ]);

        return $omega;
    }
}
