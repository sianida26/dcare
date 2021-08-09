<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Spatie\Permission\Models\Role;
use App\Models\User;
use App\Models\Terapis;

class AuthController extends Controller
{
    //

    public function register(Request $request){
        
        $rules = [
            'fullname' => 'required',
            'email' => ['required','unique:users,email','email'],
            'password' => ['required','min:8'],
        ];

        $messages = [
            'required' => 'Harus diisi',
            'email' => 'Email ini tidak valid',
            'unique' => ':attribute ini sudah ada',
            'min' => 'Minimal harus :min karakter',
            'in' => ':attribute tidak valid',
        ];

        $request->validate($rules);

        $user = new User;
        $user->name = $request->fullname;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        $role = Role::firstWhere('name','disability');
        $user->assignRole($role);
        return $user;
    }

    public function registerTerapis(Request $request){
        //TODO : validasi referral
        $rules = [
            'fullname' => 'required',
            'email' => ['required','unique:users,email','email'],
            'password' => ['required','min:8'],
            'birthdate' => ['required'],
            'phone' => ['required'],
            'address' => ['required'],
            'education' => ['required'],
            'terapist_since' => ['required', 'integer'],
            'referral' => ['required'],
        ];

        $messages = [
            'required' => 'Harus diisi',
            'email' => 'Email ini tidak valid',
            'unique' => ':attribute ini sudah ada',
            'integer' => 'Harus berupa angka',
            'min' => 'Minimal harus :min karakter',
            'in' => ':attribute tidak valid',
        ];

        $request->validate($rules);

        $user = new User;
        $terapis = new Terapis;

        $user->name = $request->fullname;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $terapis->phone = $request->phone;
        $terapis->address = $request->address;
        $terapis->education = $request->education;
        $terapis->terapist_since = $request->terapist_since;

        $user->save();
        $user->terapist()->save($terapis);
        $role = Role::firstWhere('name','terapist');
        $user->assignRole($role);
        return $user;
    }

    public function login(Request $request){

        $rules = [
            'email' => ['required'],
            'password' => ['required'],
        ];

        $messages = [
            'required' => 'Harus diisi',
        ];

        $request->validate($rules, $messages);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = User::firstWhere('email', $request->email);
            return [
                // 'username' => $user->username,
                'name' => $user->name,
                'role' => $user->roles->first()->name,
                'token' => $user->createToken('auth token')->accessToken,
            ];
        } else {
            abort(422, 'username atau password salah');
        }
    }

    public function logout(Request $request){

        if ($request->user() !== null){
            $request->user()->token()->revoke();
            return 'ok';
        }
        abort(404);
    }
}
