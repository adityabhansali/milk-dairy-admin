<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        return Inertia::render('Accounts');
    }
    public function retrieveAccountsData(Request $request)
    {
        return response()->json(['data' => Account::orderBy('created_at','DESC')->get()]);
    }

}
