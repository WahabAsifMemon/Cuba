<?php $__env->startSection('title', 'Maintenance'); ?>

<?php $__env->startSection('css'); ?>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('style'); ?>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>
<!-- tap on top starts-->
<div class="tap-top"><i data-feather="chevrons-up"></i></div>
<!-- tap on tap ends-->
<!-- page-wrapper Start-->
<div class="page-wrapper">
   <!-- Maintenance start-->
   <div class="error-wrapper maintenance-bg">
      <div class="container">
         <ul class="maintenance-icons">
            <li><i class="fa fa-cog"></i></li>
            <li><i class="fa fa-cog"></i></li>
            <li><i class="fa fa-cog"></i></li>
         </ul>
         <div class="maintenance-heading">
            <h2 class="headline">MAINTENANCE</h2>
         </div>
         <h4 class="sub-content">Our Site is Currently under maintenance We will be back Shortly<br>                Thank You For Patience</h4>
         <div><a class="btn btn-primary-gradien btn-lg text-light" href="<?php echo e(route('index')); ?>">BACK TO HOME PAGE</a></div>
      </div>
   </div>
   <!-- Maintenance end-->
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.authentication.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\Laravel\Cuba\resources\views/authentication/maintenance.blade.php ENDPATH**/ ?>