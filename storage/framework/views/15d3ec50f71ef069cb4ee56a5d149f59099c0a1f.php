<?php $__env->startSection('title', 'Reset-password'); ?>

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
   <div class="container-fluid p-0">
      <div class="row">
         <div class="col-12">
            <div class="login-card">
               <div>
                  <div><a class="logo" href="<?php echo e(route('index')); ?>"><img class="img-fluid for-light" src="<?php echo e(asset('assets/images/logo/login.png')); ?>" alt="looginpage"><img class="img-fluid for-dark" src="<?php echo e(asset('assets/images/logo/logo_dark.png')); ?>" alt="looginpage"></a></div>
                  <div class="login-main">
                     <form class="theme-form">
                        <h4>Create Your Password</h4>
                        <div class="form-group">
                           <label class="col-form-label">New Password</label>
                           <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                           <div class="show-hide"><span class="show"></span></div>
                        </div>
                        <div class="form-group">
                           <label class="col-form-label">Retype Password</label>
                           <input class="form-control" type="password" name="login[password]" required="" placeholder="*********">
                        </div>
                        <div class="form-group mb-0">
                           <div class="checkbox p-0">
                              <input id="checkbox1" type="checkbox">
                              <label class="text-muted" for="checkbox1">Remember password</label>
                           </div>
                           <button class="btn btn-primary btn-block" type="submit">Done                          </button>
                        </div>
                        <p class="mt-4 mb-0">Don't have account?<a class="ms-2" href="<?php echo e(route('sign-up')); ?>">Create Account</a></p>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('script'); ?>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.authentication.master', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\Laravel\Cuba\resources\views/authentication/reset-password.blade.php ENDPATH**/ ?>