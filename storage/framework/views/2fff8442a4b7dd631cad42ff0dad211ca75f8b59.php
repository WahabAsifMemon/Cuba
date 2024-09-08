
<?php $__env->startSection('title', 'Vendor Quote List'); ?>

<?php $__env->startSection('css'); ?>
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/animate.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/date-picker.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/dropzone.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-title'); ?>
<h3>New Vendor Quote</h3>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-items'); ?>
<li class="breadcrumb-item">Vendor Quote</li>
<li class="breadcrumb-item active">Create Vendor Quote</li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div class="form theme-form">

            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Design Name</label>
                  <input class="form-control" type="text" placeholder="Design Name">
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Required Format</label>
                  <select class="form-select">
                    <option value="" selected="">Select</option>
                    <option value="cdr">cdr</option>
                    <option value="ai ">ai </option>
                    <option value="eps">aps</option>
                    <option value="others ">others </option>
                   
                    </select>
                </div>
              </div>
             
    
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Printing Process</label>
                  <select class="form-select">
                  <option value="" selected="">Select</option>
                        <option value="Screen Printing">Screen Printing</option>
                        <option value="DTG">DTG</option>
                        <option value="DTF">DTF</option>
                        <option value="Vinyle Cutting">Vinyle Cutting</option>
                        <option value="Engraving">Engraving</option>
                        <option value="4 Color Process">4 Color Process</option>
                        <option value="Simulated Process">Simulated Process</option>
                        <option value="For Flyer">For Flyer</option>
                        <option value="Visiting Card Purpose">Visiting Card Purpose</option>
                        <option value="Social Media Post">Social Media Post</option>
                        <option value="Banner Purpose">Banner Purpose</option>
                    </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Time Frame</label>
                  <select class="form-select">
                  <option value="">Select</option>
                        <option value="normal" selected="">Normal (12 to 24 hours)</option>
                        <option value="urgent">Urgent (4 to 12 hours)</option>
                        <option value="rush">Super Rush (1 to 4 hours)</option>
                    </select>
                </div>
              </div>
    
            </div>
        
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Enter some Details</label>
                  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Upload project file</label>
                  <form class="dropzone" id="singleFileUpload" action="/upload.php">
                    <div class="dz-message needsclick">
                      <i class="icon-cloud-up"></i>
                      <h6>Drop files here or click to upload.</h6>
                      <span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div><a class="btn btn-success me-3" href="#">Add</a><a class="btn btn-danger" href="#">Cancel</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.en.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/datepicker/date-picker/datepicker.custom.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/dropzone/dropzone.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/dropzone/dropzone-script.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/handlebars.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/typeahead.bundle.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead/typeahead.custom.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead-search/handlebars.js')); ?>"></script>
<script src="<?php echo e(asset('assets/js/typeahead-search/typeahead-custom.js')); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.simple.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\Cuba\resources\views/newOrder/new_vendor_quote.blade.php ENDPATH**/ ?>