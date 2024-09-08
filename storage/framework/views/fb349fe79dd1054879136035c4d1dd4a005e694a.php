

<?php $__env->startSection('title', 'Default'); ?>

<?php $__env->startSection('css'); ?>
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/animate.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/chartist.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/date-picker.css')); ?>">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">

<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-title'); ?>
<h3>WELCOME TO IMPACT DIGITIZING CLIENT PORTAL</h3>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-items'); ?>
<li class="breadcrumb-item">Dashboard</li>
<li class="breadcrumb-item active">Default</li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">
	<div class="row second-chart-list third-news-update">
	<!-- <h1>Hello</h1> -->

		<div class="col-xl-4 xl-50 notification box-col-6">
			<div class="card">
				<div class="card-header card-no-border">
					<div class="header-top" style="justify-content: center;">
						<h5 >TOTAL PAID UNTIL NOW</h5>
					</div>
				</div>
				<div class="card-body pt-0">
						<h5 style="text-align:center;">$0</h5>
						<h5 style="text-align:center;">Billing</h5>
						
				</div>
			</div>
		</div>

		<div class="col-xl-4 xl-50 notification box-col-6">
			<div class="card">
				<div class="card-header card-no-border">
					<div class="header-top" style="justify-content: center;">
						<h5>UNGENERATED INVOICE</h5>
					</div>
				</div>
				<div class="card-body pt-0">
						<h5 style="text-align:center;">$0</h5>
						<h5 style="text-align:center;">Generate Invoice</h5>
						
				</div>
			</div>
		</div>

		<div class="col-xl-4 xl-50 notification box-col-6">
			<div class="card">
				<div class="card-header card-no-border">
					<div class="header-top" style="justify-content: center;">
						<h5>YOU OWE</h5>
					</div>
				</div>
				<div class="card-body pt-0">
						<h5 style="text-align:center;">$0</h5>
						<h5 style="text-align:center;">Pay Now</h5>
						
				</div>
			</div>
		</div>

	</div>

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
<script type="text/javascript">
	var session_layout = '<?php echo e(session()->get('layout')); ?>';
</script>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<script src="<?php echo e(asset('assets/js/chart/chartist/chartist.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/chart/chartist/chartist-plugin-tooltip.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/chart/knob/knob.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/chart/knob/knob-chart.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/chart/apex-chart/apex-chart.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/chart/apex-chart/stock-prices.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/notify/bootstrap-notify.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/dashboard/default.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/notify/index.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.en.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.custom.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/handlebars.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/typeahead.bundle.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/typeahead.custom.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead-search/handlebars.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead-search/typeahead-custom.js')); ?>"></script>
<script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
<script>
  $(document).ready(function() {
    $('#patchOrderTable').DataTable({
      // DataTables settings (can customize sorting, pagination, etc.)
    });
  });
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.simple.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\Cuba\resources\views/dashboard/index.blade.php ENDPATH**/ ?>