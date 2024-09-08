@extends('layouts.simple.master')
@section('title', 'View Vendor Order  List')

@section('css')
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/animate.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/date-picker.css')}}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/vendors/dropzone.css')}}">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">

@endsection

@section('style')
@endsection

@section('breadcrumb-title')
<h3>View Vendor Order </h3>
@endsection

@section('breadcrumb-items')
<li class="breadcrumb-item">Vendor Order</li>
<li class="breadcrumb-item active">View Vendor Order</li>
@endsection

@section('content')
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <table id="patchOrderTable" class="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td><a href="#" class="btn btn-primary">View</a></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane</td>
                <td>Smith</td>
                <td>jane@example.com</td>
                <td><a href="#" class="btn btn-primary">View</a></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Michael</td>
                <td>Jordan</td>
                <td>mjordan@example.com</td>
                <td><a href="#" class="btn btn-primary">View</a></td>
              </tr>
            </tbody>
          </table>
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
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script>
  $(document).ready(function() {
    $('#patchOrderTable').DataTable({
      // DataTables settings (can customize sorting, pagination, etc.)
    });
  });
</script>
@endsection