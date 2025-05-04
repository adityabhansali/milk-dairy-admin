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
    public function deleteAccount(Request $request)
    {
        $account = Account::find($request->id);
        if($account->delete())
        {
            return response()->json(['data'=>'Account deleted'],200);
        }
        else{
            return response()->json(['data'=>'Account Failed']);
        }
    }

}
