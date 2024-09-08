
<?php $__env->startSection('title', 'Patch Order List'); ?>

<?php $__env->startSection('css'); ?>
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/animate.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/date-picker.css')); ?>">
<link rel="stylesheet" type="text/css" href="<?php echo e(asset('assets/css/vendors/dropzone.css')); ?>">
<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-title'); ?>
<h3>New Patch Order</h3>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('breadcrumb-items'); ?>
<li class="breadcrumb-item">Patch Order</li>
<li class="breadcrumb-item active">Create Patch Order</li>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-body">
          <div class="form theme-form">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Order Type</label>
                  <select class="form-select">
                    <option selected>Patch</option>
                    <option>Vector Conversion</option>
                    <option>Embroidery Patches</option>
   
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label>Design Name</label>
                  <input class="form-control" type="text" placeholder="Design Name">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Number of Colors</label>
                  <input class="form-control" type="text" placeholder="Enter Number of Colors">
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Name of Colors</label>
                  <input class="form-control" type="text" placeholder="Enter Name of Colors">
                </div>
              </div>
    
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label>Height</label>
                  <input class=" form-control" type="text" placeholder="Enter Height">
                </div>
              </div>
              <div class="col-sm-4">
                <div class="mb-3">
                  <label>Width</label>
                  <input class="form-control" type="text"placeholder="Enter Width" >
                </div>
              </div>
              <div class="col-sm-4">
                <div class="mb-3">
                  <label>Unit</label>
                  <select class="form-select">
                    <option>Inches</option>
                    <option>Mm</option>
                    <option>Cm</option>
                  </select>
                </div>
              </div>

            </div>
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Type</label>
                  <select class="form-select">
                    <option value="" selected="">Design Format</option>
                    <option value="Tajima">Tajima</option>
                    <option value="Melco ">Melco </option>
                    <option value="Melco">Melco</option>
                    <option value="Deco, Brother, Babylock">Deco, Brother, Babylock </option>
                    <option value="Wilcom ">Wilcom </option>
                    <option value="Wilcom V9 ">Wilcom V9 </option>
                    <option value="Wilcom ESS ">Wilcom ESS </option>
                    <option value="Wilcom ESL ">Wilcom ESL </option>
                    <option value="Wilcom PLauen">Wilcom PLauen</option>
                    <option value="Wilcom Saurer ">Wilcom Saurer </option>
                    <option value="Hiraoka DAT">Hiraoka DAT</option>
                    <option value="Hiraoka VEP ">Hiraoka VEP </option>
                    <option value="Saurer SLC ">Saurer SLC </option>
                    <option value="Time and Space MJD ">Time and Space MJD </option>
                    </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mb-3">
                  <label>Placement</label>
                  <select class="form-select">
                    <option value="Tajima" selected>Tajima</option>
                    <option value="Melco ">Melco </option>
                    <option value="Melco">Melco</option>
                    <option value="Deco, Brother, Babylock">Deco, Brother, Babylock </option>
                    <option value="Wilcom ">Wilcom </option>
                    <option value="Wilcom V9 ">Wilcom V9 </option>
                    <option value="Wilcom ESS ">Wilcom ESS </option>
                    <option value="Wilcom ESL ">Wilcom ESL </option>
                    <option value="Wilcom PLauen">Wilcom PLauen</option>
                    <option value="Wilcom Saurer ">Wilcom Saurer </option>
                    <option value="Hiraoka DAT">Hiraoka DAT</option>
                    <option value="Hiraoka VEP ">Hiraoka VEP </option>
                    <option value="Saurer SLC ">Saurer SLC </option>
                    <option value="Time and Space MJD ">Time and Space MJD </option>
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
<?php echo $__env->make('layouts.simple.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\Cuba\resources\views/newOrder/new_patch.blade.php ENDPATH**/ ?>