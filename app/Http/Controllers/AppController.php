<?php

namespace App\Http\Controllers;

use App\Models\Disability;
use App\Models\DisabilityType;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    //
    public function init(Request $request){

        $user = Auth::user();

        $showModalForm = false;
        if ($user->roles->first()->name === "disability"){
            $disability = $user->disability;
            $showModalForm = $disability === null;
        }

        return [
            'showModalForm' => $showModalForm,
        ];
    }

    public function submitDisabilityForm(Request $request){
        //todo logic
        $rules = [
            'assistantAddress' => ['bail', 'required', 'string'],
            'assistantName' => ['bail', 'required', 'string'],
            'birthdate' => ['bail', 'required', 'date_format:d/m/Y'],
            'birthplace' => ['bail', 'required'],
            'disabilityAddress' => ['bail', 'required', 'string'],
            'disabilityType' => ['bail', 'required', 'exists:disability_types,name'],
            'phone' => ['bail', 'required', 'string'],
        ];

        $messages = [
            'required' => 'Harus diisi',
            'string' => 'Harus berupa teks',
            'date_format' => 'Format tanggal tidak sesuai (dd/MM/yyyy)',
            'exists' => 'Tipe tidak sesuai',
        ];

        $request->validate($rules, $messages);

        $date = Carbon::createFromFormat('d/m/Y',$request->birthdate);
        $user = Auth::user();
        $type = DisabilityType::firstWhere('name',$request->disabilityType);
        $model = new Disability;


        $model->user_id = $user->id;
        $model->type_id = $type->id;
        $model->birthplace = $request->birthplace;
        $model->birthdate = $date;
        $model->disability_address = $request->disabilityAddress;
        $model->assistant_name = $request->assistantName;
        $model->phone = $request->phone;
        $model->assistant_address = $request->assistantAddress;
        $model->save();
        return 'ok';
    }
}
