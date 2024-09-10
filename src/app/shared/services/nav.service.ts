import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

// Menu
export interface Menu {
	headTitle1?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search: boolean = false;

	// Language
	public language: boolean = false;
	
	// Mega Menu
	public megaMenu: boolean = false;
	public levelMenu: boolean = false;
	public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen: boolean = false;

	constructor(private router: Router) {
		this.setScreenWidth(window.innerWidth);
		fromEvent(window, 'resize').pipe(
			debounceTime(1000),
			takeUntil(this.unsubscriber)
		).subscribe((evt: any) => {
			this.setScreenWidth(evt.target.innerWidth);
			if (evt.target.innerWidth < 991) {
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			}
			if(evt.target.innerWidth < 1199) {
				this.megaMenuColapse = true;
			}
		});
		if(window.innerWidth < 991) { // Detect Route change sidebar close
			this.router.events.subscribe(event => { 
				this.collapseSidebar = true;
				this.megaMenu = false;
				this.levelMenu = false;
			});
		}
	}

	ngOnDestroy() {
		this.unsubscriber.next();
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Dashboards', icon: 'home', type: 'sub',  active: true, children: [
				{ path: '/dashboard/default', title: 'Summery', type: 'link' }
			]
		},
		
		{
			headTitle1: 'Order Managment'
		},
		{
			title: 'Place Order', icon: 'shopping-cart', type: 'sub',  active: false, children: [
				{ path: '/order/create_digitizing_order', title: 'New Digitizing Order', type: 'link' },
				{ path: '/order/create_vendor_order', title: 'New Vendor Order', type: 'link' },
				{ path: '/order/create_patch_order', title: 'New Patch Order', type: 'link' },


			]
		},

		{
			title: 'View Order', icon: 'eye', type: 'sub',  active: false, children: [
				{ path: '/order/view_digitizing_order', title: 'View Digitizing Order', type: 'link' },
				{ path: '/order/view_vendor_order', title: 'View Vendor Order', type: 'link' },
				{ path: '/order/view_patch_order', title: 'View Patch Order', type: 'link' },


			]
		},

		{
			headTitle1: 'Quote Managment'
		},

		{
			title: 'Place Quote', icon: 'file', type: 'sub',  active: false, children: [
				{ path: '/quote/create_digitizing_quote', title: 'New Digitizing Quote', type: 'link' },
				{ path: '/quote/create_vendor_quote', title: 'New Vendor Quote', type: 'link' },
				{ path: '/quote/create_patch_quote', title: 'New Patch Quote', type: 'link' },


			]
			
		},

		{ path: '/quote/view_quote', icon: 'eye', title: 'View Quote', type: 'link' },


		{
			headTitle1: 'Balance Managment'
		},

		{ path: '/balance/billing', icon: 'dollar-sign', title: 'Billing', type: 'link' },


		

		{
			headTitle1: 'Ticket Management',
		},
	
	
		{ path: '/support/create_ticket', title: 'Create Ticket', icon: 'alert-circle', type: 'link' },
		{ path: '/support/view_ticket', title: 'View Ticket', icon: 'eye', type: 'link' }

	];

	MEGAMENUITEMS: Menu[] = [
		{
			title: 'Error Pages', type: 'sub', active: true, children: [
				{ path: '/error-page/error-400', title: 'Error Page 400', type: 'link' },
				{ path: '/error-page/error-401', title: 'Error Page 401', type: 'link' },
				{ path: '/error-page/error-403', title: 'Error Page 403', type: 'link' },
				{ path: '/error-page/error-404', title: 'Error Page 404', type: 'link' },
				{ path: '/error-page/error-500', title: 'Error Page 500', type: 'link' },
				{ path: '/error-page/error-503', title: 'Error Page 503', type: 'link' },
			]
		},
		{
			title: 'Authentication', type: 'sub', active: false, children: [
				{ path: '/authentication/simple-login', title: 'Login Simple', type: 'link' },
				{ path: '/authentication/login-with-background-image', title: 'Login BG Image', type: 'link' },
				{ path: '/authentication/login-with-background-video', title: 'Login BG Video', type: 'link' },
				{ path: '/authentication/simple-register', title: 'Simple Register', type: 'link' },
				{ path: '/authentication/register-with-background-image', title: 'Register BG Image', type: 'link' },
				{ path: '/authentication/register-with-background-video', title: 'Register BG Video', type: 'link' }
			]
		},
		{
			title: 'Usefull Pages', type: 'sub', active: false, children: [
				{ path: '/search-pages', title: 'Search Pages', type: 'link' },
				{ path: '/authentication/unlock-user', title: 'Unlock User', type: 'link' },
				{ path: '/authentication/forgot-password', title: 'Forgot Password', type: 'link' },
				{ path: '/authentication/reset-password', title: 'Reset Password', type: 'link' },
				{ path: '/maintenance', title: 'Maintenance', type: 'link' }
			]
		},
		{
			title: 'Email templates', type: 'sub', active: false, children: [
				{ path: 'http://admin.pixelstrap.com/cuba/theme/basic-template.html', title: 'Basic Email', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/email-header.html', title: 'Basic With Header', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/template-email.html', title: 'Ecomerce Template', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/template-email-2.html', title: 'Email Template 2', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/ecommerce-templates.html', title: 'Ecommerce Email', type: 'extTabLink' },
				{ path: 'http://admin.pixelstrap.com/cuba/theme/email-order-success.html', title: 'Order Success', type: 'extTabLink' }
			]
		},
		{
			title: 'Coming Soon', type: 'sub', active: false, children: [
				{ path: '/coming-soon/simple', title: 'Coming Simple', type: 'link' },
				{ path: '/coming-soon/simple-with-bg-img', title: 'Coming BG Image', type: 'link' },
				{ path: '/coming-soon/simple-with-bg-vid', title: 'Coming BG Video', type: 'link' }
			]
		},
	];

	LEVELMENUITEMS: Menu[] = [
		{
			path: '/file-manager', title: 'File Manager', icon: 'git-pull-request', type: 'link'
		},
		{
			title: 'Users', icon: 'users', type: 'sub', active: false, children: [
				{ path: '/user/team-details', title: 'All Users', icon: 'users', type: 'link' },
				{ path: '/user/profile', title: 'User Profile', icon: 'users', type: 'link' },
				{ path: '/user/edit-profile', title: 'Edit Profile', icon: 'users', type: 'link' },
			]
		},
		{ path: '/bookmarks', title: 'Bookmarks', icon: 'heart', type: 'link' },
		{ path: '/calender', title: 'Calender', icon: 'calendar', type: 'link' },
		{ path: '/social-app', title: 'Social App', icon: 'zap', type: 'link' }
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	megaItems = new BehaviorSubject<Menu[]>(this.MEGAMENUITEMS);
	levelmenuitems = new BehaviorSubject<Menu[]>(this.LEVELMENUITEMS);

}
