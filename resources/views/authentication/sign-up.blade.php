@extends('layouts.authentication.master')
@section('title', 'Sign-up')

@section('css')
@endsection

@section('style')
@endsection


@section('content')
<div class="container-fluid p-0">
   <div class="row m-0">
      <div class="col-12 p-0">
         <div class="login-card">
            <div>
               <div><a class="logo" href="{{ route('index') }}"><img class="img-fluid for-light" src="{{asset('assets/images/logo/login.png')}}" alt="looginpage"><img class="img-fluid for-dark" src="{{asset('assets/images/logo/logo_dark.png')}}" alt="looginpage"></a></div>
               <div class="login-main">
                  <form class="theme-form">
                     <h4>Create your account</h4>
                     <p>Enter your personal details to create account</p>
                     <div class="form-group">
                        <label class="col-form-label pt-0">Your Name</label>
                        <div class="row g-2">
                           <div class="col-6">
                              <input class="form-control" type="text" required="" placeholder="First name">
                           </div>
                           <div class="col-6">
                              <input class="form-control" type="text" required="" placeholder="Last name">
                           </div>
                        </div>
                     </div>
                     <div class="form-group">
                        <label class="col-form-label">Email Address</label>
                        <input class="form-control" type="email" required="" placeholder="Test@gmail.com">
                     </div>
                     <div class="form-group">
                        <label class="col-form-label">Password</label>
                        <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                        <div class="show-hide"><span class="show"></span></div>
                     </div>
                     <div class="form-group ">
                        {{-- <div class="checkbox p-0">
                           <input id="checkbox1" type="checkbox">
                           <label class="text-muted" for="checkbox1">Agree with<a class="ms-2" href="#">Privacy Policy</a></label>
                        </div> --}}
                        <a class="btn btn-primary btn-block" href="{{ route('login') }}">Create Account</a>

                     </div>
                     
                     <p class="mt-4 mb-0">Already have an account?<a class="ms-2" href="{{ route('login') }}">Sign in</a></p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
@endsection

@section('script')
@endsection