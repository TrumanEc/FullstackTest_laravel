<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json([
            "status" => 1,
            "msg" => "Registro de usuario exitoso!!"
        ]);
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email|',
            'password' => 'required'
        ]);

        $user = User::where("email", "=", $request->email)->first();

        if (isset($user->id)) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json([
                    'status' => 1,
                    "msg" => 'Usuario Logeado exitosamente',
                    "acces_token" => $token
                ]);
            } else {
                return response()->json([
                    'status' => 0,
                    "msg" => 'Contraseña invalida',
                ]);
            }
        } else {
            return response()->json([
                'status' => 0,
                "msg" => 'Usuario no encontrado',
            ]);
        }
    }


    public function userProfile()
    {
        return response()->json([
            'status' => 0,
            "msg" => 'Perfil de usuario',
            "data" => auth()->user()
        ]);
    }

    public function userUpdate(Request $request)
    {
        $user = User::where("email", "=", auth()->user()->email)->first();

        try {

            $request->validate([
                'email' => 'unique:users,email,' . $user->id
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 0,
                "msg" => 'Email ya esta en uso'
            ]);
        }



        if (isset($user->id)) {
            if (isset($request->name)) {
                $user->name = $request->name;
            }
            if (isset($request->email)) {
                $user->email = $request->email;
            }
            $user->save();

            return response()->json([
                'status' => 1,
                "msg" => 'Usuario editado exitosamente',
                'data' => $user
            ]);
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 0,
            "msg" => 'se cerro la sesion'
        ]);
    }
}
