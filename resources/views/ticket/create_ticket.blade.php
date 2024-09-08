@extends('layouts.simple.master')
@section('title', 'Ticket List')

@section('css')
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/animate.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/date-picker.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/dropzone.css')}}">
@endsection

@section('style')
@endsection

@section('breadcrumb-title')
<h3>New Ticket</h3>
@endsection

@section('breadcrumb-items')
<li class="breadcrumb-item">Support Ticket</li>
<li class="breadcrumb-item active">Create Support Ticket</li>
@endsection

@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div class="form theme-form">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Priority</label>
                  <select class="form-select">
                    <option selected>Normal</option>
                    <option>Low</option>
                    <option>Serious</option>
   
                  </select>
                </div>
              </div>
            </div>

        
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div><a class="btn btn-success me-3" href="#">Submit</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection

@section('script')
<script src="{{asset('assets/js/datepicker/date-picker/datepicker.js')}}"></script>
<script src="{{asset('assets/js/datepicker/date-picker/datepicker.en.js')}}"></script>
<script src="{{asset('assets/js/datepicker/date-picker/datepicker.custom.js')}}"></script>
<script src="{{asset('assets/js/dropzone/dropzone.js')}}"></script>
<script src="{{asset('assets/js/dropzone/dropzone-script.js')}}"></script>
<script src="{{asset('assets/js/typeahead/handlebars.js')}}"></script>
<script src="{{asset('assets/js/typeahead/typeahead.bundle.js')}}"></script>
<script src="{{asset('assets/js/typeahead/typeahead.custom.js')}}"></script>
<script src="{{asset('assets/js/typeahead-search/handlebars.js')}}"></script>
<script src="{{asset('assets/js/typeahead-search/typeahead-custom.js')}}"></script>
@endsection