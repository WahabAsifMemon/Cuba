<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        return view('dashboard.index');
    }


    public function newOrder()
    {
        return view('newOrder.new_order');
    }

    public function newVendor()
    {
        return view('newOrder.new_vendor');
    }
    
    public function newPatch()
    {
        return view('newOrder.new_patch');
    }

    public function viewOrder()
    {
        return view('newOrder.view_order');
    }

    public function viewVendor()
    {
        return view('newOrder.view_vendor');
    }
    
    public function viewPatch()
    {
        return view('newOrder.view_patch');
    }


    public function newQuote()
    {
        return view('newOrder.new_order_quote');
    }

    public function newVendorQuote()
    {
        return view('newOrder.new_vendor_quote');
    }
    
    public function newPatchQuote()
    {
        return view('newOrder.new_patch_quote');
    }

    public function viewQuote()
    {
        return view('newOrder.view_quote');
    }

    public function billing()
    {
        return view('balance.billing');
    }

    public function createTicket()
    {
        return view('ticket.create_ticket');
    }

    public function viewTicket()
    {
        return view('ticket.view_ticket');
    }


    
    
    public function estimates()
    {
        return view('estimate.estimate');
    }

    // public function projectCreate()
    // {
    //     return view('project.projectcreate');
    // }
}
