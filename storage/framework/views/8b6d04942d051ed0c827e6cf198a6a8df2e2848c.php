<div class="sidebar-wrapper">
	<div>
		<div class="logo-wrapper">
			<a href="<?php echo e(route('/')); ?>"><img class="img-fluid for-light" src="<?php echo e(asset('assets/images/logo/logo.png')); ?>" alt=""><img class="img-fluid for-dark" src="<?php echo e(asset('assets/images/logo/logo_dark.png')); ?>" alt=""></a>
			<div class="back-btn"><i class="fa fa-angle-left"></i></div>
			<div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
		</div>
		<div class="logo-icon-wrapper"><a href="<?php echo e(route('/')); ?>"><img class="img-fluid" src="<?php echo e(asset('assets/images/logo/logo-icon.png')); ?>" alt=""></a></div>
		<nav class="sidebar-main">
			<div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
			<div id="sidebar-menu">
				<ul class="sidebar-links" id="simple-bar">
					<li class="back-btn">
						<a href="<?php echo e(route('/')); ?>"><img class="img-fluid" src="<?php echo e(asset('assets/images/logo/logo-icon.png')); ?>" alt=""></a>
						<div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
					</li>
					
					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title <?php echo e(request()->route()->getPrefix() == '/dashboard' ? 'active' : ''); ?>" href="#"><i data-feather="home"></i><span class="lan-3"><?php echo e(trans('lang.Dashboards')); ?></span>
							<div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/dashboard' ? 'down' : 'right'); ?>"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: <?php echo e(request()->route()->getPrefix() == '/dashboard' ? 'block;' : 'none;'); ?>">
							<li><a class="lan-4 <?php echo e(Route::currentRouteName()=='index' ? 'active' : ''); ?>" href="<?php echo e(route('index')); ?>">Summary</a></li>
						</ul>
					</li>
				

					<li class="sidebar-main-title">
						<div>
							<h6 class="lan-8">Orders Managment</h6>
						</div>
					</li>
					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title <?php echo e(request()->route()->getPrefix() == '/project' ? 'active' : ''); ?>" href="#">
							<i data-feather="shopping-cart"></i><span>Place Order</span>
							<div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/project' ? 'down' : 'right'); ?>"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: <?php echo e(request()->route()->getPrefix() == '/project' ? 'block;' : 'none;'); ?>">
		                   
						<li><a href="<?php echo e(route('newOrder')); ?>" class="<?php echo e(Route::currentRouteName()=='newOrder' ? 'active' : ''); ?>">New Digitizing Order</a></li>
						<li><a href="<?php echo e(route('newVendor')); ?>" class="<?php echo e(Route::currentRouteName()=='newVendor' ? 'active' : ''); ?>">New Vendor Order</a></li>
						<li><a href="<?php echo e(route('newPatch')); ?>" class="<?php echo e(Route::currentRouteName()=='newPatch' ? 'active' : ''); ?>">New Patch Order</a></li>
		                </ul>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title <?php echo e(request()->route()->getPrefix() == '/project' ? 'active' : ''); ?>" href="#">
							<i data-feather="eye"></i><span>View Order</span>
							<div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/project' ? 'down' : 'right'); ?>"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: <?php echo e(request()->route()->getPrefix() == '/project' ? 'block;' : 'none;'); ?>">
		                   
						<li><a href="<?php echo e(route('viewOrder')); ?>" class="<?php echo e(Route::currentRouteName()=='viewOrder' ? 'active' : ''); ?>">View Digitizing Order</a></li>
						<li><a href="<?php echo e(route('viewVendor')); ?>" class="<?php echo e(Route::currentRouteName()=='viewVendor' ? 'active' : ''); ?>">View Vendor Order</a></li>
						<li><a href="<?php echo e(route('viewPatch')); ?>" class="<?php echo e(Route::currentRouteName()=='viewPatch' ? 'active' : ''); ?>">View Patch Order</a></li>
		                </ul>
					</li>

		
					
					

					<li class="sidebar-main-title">
						<div>
							<h6>Quote Managment</h6>
						</div>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title <?php echo e(request()->route()->getPrefix() == '/project' ? 'active' : ''); ?>" href="#">
							<i data-feather="file-text"></i><span>Place Quote</span>
							<div class="according-menu"><i class="fa fa-angle-<?php echo e(request()->route()->getPrefix() == '/project' ? 'down' : 'right'); ?>"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: <?php echo e(request()->route()->getPrefix() == '/project' ? 'block;' : 'none;'); ?>">
		                   
						<li><a href="<?php echo e(route('newQuote')); ?>" class="<?php echo e(Route::currentRouteName()=='newQuote' ? 'active' : ''); ?>">New Digitizing Quote</a></li>
						<li><a href="<?php echo e(route('newVendorQuote')); ?>" class="<?php echo e(Route::currentRouteName()=='newVendorQuote' ? 'active' : ''); ?>">New Vendor Quote</a></li>
						<li><a href="<?php echo e(route('newPatchQuote')); ?>" class="<?php echo e(Route::currentRouteName()=='newPatchQuote' ? 'active' : ''); ?>">New Patch Quote</a></li>
		                </ul>
					</li>

					 <li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav <?php echo e(Route::currentRouteName()=='viewQuote' ? 'active' : ''); ?>" href="<?php echo e(route('viewQuote')); ?>"><i data-feather="eye"> </i><span>View Quote</span></a></li>



			


					<li class="sidebar-main-title">
						<div>
							<h6>Balance Managment</h6>
						</div>
					</li>
					<li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav <?php echo e(Route::currentRouteName()=='billing' ? 'active' : ''); ?>" href="<?php echo e(route('billing')); ?>"><i data-feather="dollar-sign"> </i><span>Billing</span></a></li>
					
					<li class="sidebar-main-title">
						<div>
							<h6>Ticket Managment</h6>
						</div>
					</li>

					<li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav <?php echo e(Route::currentRouteName()=='createTicket' ? 'active' : ''); ?>" href="<?php echo e(route('createTicket')); ?>"><i data-feather="file"> </i><span>Create Ticket</span></a></li>
					<li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav <?php echo e(Route::currentRouteName()=='viewTicket' ? 'active' : ''); ?>" href="<?php echo e(route('viewTicket')); ?>"><i data-feather="eye"> </i><span>View Ticket</span></a></li>

		
					
					<!-- <li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav <?php echo e(Route::currentRouteName()=='support-ticket' ? 'active' : ''); ?>" href="<?php echo e(route('support-ticket')); ?>"><i data-feather="users"> </i><span><?php echo e(trans('lang.Support Ticket')); ?></span></a></li>  -->
				</ul>
			</div>
			<div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
		</nav>
	</div>
</div><?php /**PATH D:\laragon\www\Cuba\resources\views/layouts/simple/sidebar.blade.php ENDPATH**/ ?>