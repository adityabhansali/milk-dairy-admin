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
        $data = Account::all();
        return Inertia::render('Accounts', ['data' => $data]);
    }

}
