<div class="sidebar-wrapper">
	<div>
		<div class="logo-wrapper">
			<a href="{{route('/')}}"><img class="img-fluid for-light" src="{{asset('assets/images/logo/logo.png')}}" alt=""><img class="img-fluid for-dark" src="{{asset('assets/images/logo/logo_dark.png')}}" alt=""></a>
			<div class="back-btn"><i class="fa fa-angle-left"></i></div>
			<div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i></div>
		</div>
		<div class="logo-icon-wrapper"><a href="{{route('/')}}"><img class="img-fluid" src="{{asset('assets/images/logo/logo-icon.png')}}" alt=""></a></div>
		<nav class="sidebar-main">
			<div class="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
			<div id="sidebar-menu">
				<ul class="sidebar-links" id="simple-bar">
					<li class="back-btn">
						<a href="{{route('/')}}"><img class="img-fluid" src="{{asset('assets/images/logo/logo-icon.png')}}" alt=""></a>
						<div class="mobile-back text-end"><span>Back</span><i class="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
					</li>
					
					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/dashboard' ? 'active' : '' }}" href="#"><i data-feather="home"></i><span class="lan-3">{{ trans('lang.Dashboards') }}</span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/dashboard' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/dashboard' ? 'block;' : 'none;' }}">
							<li><a class="lan-4 {{ Route::currentRouteName()=='index' ? 'active' : '' }}" href="{{route('index')}}">Summary</a></li>
						</ul>
					</li>
				

					<li class="sidebar-main-title">
						<div>
							<h6 class="lan-8">Business</h6>
						</div>
					</li>
					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="box"></i><span>Orders</span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="box"></i><span>Estimates</span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="edit"></i><span>Edits </span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>
					
					

					<li class="sidebar-main-title">
						<div>
							<h6>Account</h6>
						</div>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="box"></i><span>Billing</span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="box"></i><span>Profile</span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>

					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="edit"></i><span>Messages </span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>


					<li class="sidebar-main-title">
						<div>
							<h6>Support</h6>
						</div>
					</li>
					<li class="sidebar-list">
						<a class="sidebar-link sidebar-title {{request()->route()->getPrefix() == '/project' ? 'active' : '' }}" href="#">
							<i data-feather="edit"></i><span>Help Disk </span>
							<div class="according-menu"><i class="fa fa-angle-{{request()->route()->getPrefix() == '/project' ? 'down' : 'right' }}"></i></div>
						</a>
						<ul class="sidebar-submenu" style="display: {{ request()->route()->getPrefix() == '/project' ? 'block;' : 'none;' }}">
		                    <li><a href="{{route('projects')}}" class="{{ Route::currentRouteName()=='projects' ? 'active' : '' }}">{{ trans('lang.Project List') }}</a></li>
		                    <li><a href="{{route('projectcreate')}}" class="{{ Route::currentRouteName()=='projectcreate' ? 'active' : '' }}">{{ trans('lang.Create new') }}</a></li>
		                </ul>
					</li>

					{{-- <li class="sidebar-list"><a class="sidebar-link sidebar-title link-nav {{ Route::currentRouteName()=='support-ticket' ? 'active' : '' }}" href="{{route('support-ticket')}}"><i data-feather="users"> </i><span>{{ trans('lang.Support Ticket') }}</span></a></li> --}}
				</ul>
			</div>
			<div class="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
		</nav>
	</div>
</div>