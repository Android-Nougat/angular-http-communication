(self["webpackChunkbooktracker"] = self["webpackChunkbooktracker"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9884:
/*!************************************************!*\
  !*** ./src/app/add-book/add-book.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBookComponent": () => (/* binding */ AddBookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-book.component.html */ 7052);
/* harmony import */ var data_text_css_charset_utf_8_base64_CiAgICBlbXtmbG9hdDpyaWdodDtjb2xvcjpyZWR9CiAgICA___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data:text/css;charset=utf-8;base64,CiAgICBlbXtmbG9hdDpyaWdodDtjb2xvcjpyZWR9CiAgICA= */ 352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ 3943);






let AddBookComponent = class AddBookComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.author = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.publicationYear = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(0, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[0-9]*')]);
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: this.title,
            publicationYear: this.publicationYear,
            author: this.author
        });
    }
    saveBook(formValues) {
        let newBook = formValues;
        newBook.bookID = 0;
        console.log(newBook);
        this.dataService.addBook(newBook).subscribe((data) => console.log(data), (err) => console.log(err));
    }
};
AddBookComponent.ctorParameters = () => [
    { type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
AddBookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-add-book',
        template: _raw_loader_add_book_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [data_text_css_charset_utf_8_base64_CiAgICBlbXtmbG9hdDpyaWdodDtjb2xvcjpyZWR9CiAgICA___WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddBookComponent);



/***/ }),

/***/ 4808:
/*!****************************************************!*\
  !*** ./src/app/add-reader/add-reader.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReaderComponent": () => (/* binding */ AddReaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-reader.component.html */ 1699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



let AddReaderComponent = class AddReaderComponent {
    constructor() { }
    ngOnInit() { }
    saveReader(formValues) {
        let newReader = formValues;
        newReader.readerID = 0;
        console.log(newReader);
        console.warn('Save new reader not yet implemented.');
    }
};
AddReaderComponent.ctorParameters = () => [];
AddReaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-add-reader',
        template: _raw_loader_add_reader_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], AddReaderComponent);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/add-book/add-book.component */ 9884);
/* harmony import */ var app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/add-reader/add-reader.component */ 4808);
/* harmony import */ var app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/dashboard/dashboard.component */ 7528);
/* harmony import */ var app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/edit-book/edit-book.component */ 445);
/* harmony import */ var app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/edit-reader/edit-reader.component */ 6236);
/* harmony import */ var _core_book_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/book-resolver.service */ 7195);









const routes = [
    { path: 'dashboard', component: app_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, resolve: { resolvedBooks: _core_book_resolver_service__WEBPACK_IMPORTED_MODULE_5__.BookResolverService } },
    { path: 'addbook', component: app_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__.AddBookComponent },
    { path: 'addreader', component: app_add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_1__.AddReaderComponent },
    { path: 'editreader/:id', component: app_edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_4__.EditReaderComponent },
    { path: 'editbook/:id', component: app_edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_3__.EditBookComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ 892);





let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'app';
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-book/add-book.component */ 9884);
/* harmony import */ var _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-reader/add-reader.component */ 4808);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-book/edit-book.component */ 445);
/* harmony import */ var _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-reader/edit-reader.component */ 6236);
/* harmony import */ var _core_book_tracker_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/book-tracker-error-handler.service */ 9772);
/* harmony import */ var _core_add_header_interceptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/add-header.interceptors */ 9643);
/* harmony import */ var _core_log_response_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/log-response.interceptors */ 2921);
/* harmony import */ var _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/cache.interceptor */ 7354);
/* harmony import */ var _component_login_component_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/login-component/login.component */ 5376);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _component_profile_component_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/profile-component/profile.component */ 7270);
/* harmony import */ var _component_upvote_component_upvote_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/upvote-component/upvote.component */ 8150);
/* harmony import */ var _service_voter_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/voter.service */ 749);






















const route = [
    { path: 'login', component: _component_login_component_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent },
    { path: 'profile', component: _component_profile_component_profile_component__WEBPACK_IMPORTED_MODULE_13__.ProfileComponent }
];
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.DashboardComponent,
            _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_0__.AddBookComponent,
            _edit_reader_edit_reader_component__WEBPACK_IMPORTED_MODULE_6__.EditReaderComponent,
            _edit_book_edit_book_component__WEBPACK_IMPORTED_MODULE_5__.EditBookComponent,
            _add_reader_add_reader_component__WEBPACK_IMPORTED_MODULE_1__.AddReaderComponent,
            _component_login_component_login_component__WEBPACK_IMPORTED_MODULE_11__.LoginComponent,
            _component_profile_component_profile_component__WEBPACK_IMPORTED_MODULE_13__.ProfileComponent,
            _component_upvote_component_upvote_component__WEBPACK_IMPORTED_MODULE_14__.UpvoteComponent
        ],
        providers: [
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ErrorHandler, useClass: _core_book_tracker_error_handler_service__WEBPACK_IMPORTED_MODULE_7__.BookTrackerErrorHandlerService },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _core_add_header_interceptors__WEBPACK_IMPORTED_MODULE_8__.AddHeaderInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _core_log_response_interceptors__WEBPACK_IMPORTED_MODULE_9__.LogResponseInterceptor, multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS, useClass: _core_cache_interceptor__WEBPACK_IMPORTED_MODULE_10__.CacheInterceptor, multi: true },
            _service_auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService,
            _service_voter_service__WEBPACK_IMPORTED_MODULE_15__.VoterService
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot(route)
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 5376:
/*!**************************************************************!*\
  !*** ./src/app/component/login-component/login.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.component.html */ 8155);
/* harmony import */ var data_text_css_charset_utf_8_base64_CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgICAgICA___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data:text/css;charset=utf-8;base64,CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgICAgICA= */ 2600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth.service */ 892);






let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        // throw new Error("Method not implemented.");
    }
    login(value) {
        this.authService.login(value.userName, value.password);
        this.router.navigate(['/dashboard']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-login-component",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [data_text_css_charset_utf_8_base64_CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgICAgICA___WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginComponent);



/***/ }),

/***/ 7270:
/*!******************************************************************!*\
  !*** ./src/app/component/profile-component/profile.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.component.html */ 5250);
/* harmony import */ var data_text_css_charset_utf_8_base64_CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgIC5lcnJvcntiYWNrZ3JvdW5kOiNmZWNhY2F9CiAgICA___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data:text/css;charset=utf-8;base64,CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgIC5lcnJvcntiYWNrZ3JvdW5kOiNmZWNhY2F9CiAgICA= */ 8864);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/auth.service */ 892);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);







let ProfileComponent = class ProfileComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authService.currentUser.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern('[a-zA-Z]*')]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authService.currentUser.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }
    isValidLastName() {
        return this.lastName.valid || this.lastName.touched;
    }
    isValidFirstName() {
        return this.firstName.valid || this.firstName.touched;
    }
    save(profile) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(profile);
            this.router.navigate(['dashboard']);
        }
    }
    cancel() {
        this.router.navigate(['dashboard']);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-profile-component',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [data_text_css_charset_utf_8_base64_CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgIC5lcnJvcntiYWNrZ3JvdW5kOiNmZWNhY2F9CiAgICA___WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfileComponent);



/***/ }),

/***/ 8150:
/*!****************************************************************!*\
  !*** ./src/app/component/upvote-component/upvote.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpvoteComponent": () => (/* binding */ UpvoteComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_upvote_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upvote.component.html */ 4580);
/* harmony import */ var data_text_css_charset_utf_8_base64_CiAgICAgICAgICAgIHNwYW57bWFyZ2luLWxlZnQ6MnB4fQogICAgICAgICAgICBpe2JvcmRlcjpibGFja30KICAgICAgICA___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! data:text/css;charset=utf-8;base64,CiAgICAgICAgICAgIHNwYW57bWFyZ2luLWxlZnQ6MnB4fQogICAgICAgICAgICBpe2JvcmRlcjpibGFja30KICAgICAgICA= */ 813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/auth.service */ 892);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5917);






let UpvoteComponent = class UpvoteComponent {
    constructor(authService) {
        this.authService = authService;
        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    set voted(val) {
        this.iconColor = val ? "red" : "grey";
    }
    ;
    ngOnInit() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.authService.isLoggedIn()).subscribe((data) => this.user = data);
    }
    onClick() {
        this.vote.emit({});
    }
};
UpvoteComponent.ctorParameters = () => [
    { type: app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
UpvoteComponent.propDecorators = {
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    voted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    vote: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
UpvoteComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-upvote",
        template: _raw_loader_upvote_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [data_text_css_charset_utf_8_base64_CiAgICAgICAgICAgIHNwYW57bWFyZ2luLWxlZnQ6MnB4fQogICAgICAgICAgICBpe2JvcmRlcjpibGFja30KICAgICAgICA___WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpvoteComponent);



/***/ }),

/***/ 9643:
/*!*************************************************!*\
  !*** ./src/app/core/add-header.interceptors.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTEXT_TYPE": () => (/* binding */ CONTEXT_TYPE),
/* harmony export */   "AddHeaderInterceptor": () => (/* binding */ AddHeaderInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);



const CONTEXT_TYPE = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpContextToken(() => 'application/json');
let AddHeaderInterceptor = class AddHeaderInterceptor {
    intercept(req, next) {
        console.log(`AddHeaderInterceptor - ${req.url}`);
        let jsonReq = req.clone({
            setHeaders: {
                'Content-Type': req.context.get(CONTEXT_TYPE)
            }
        });
        return next.handle(jsonReq);
    }
};
AddHeaderInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AddHeaderInterceptor);



/***/ }),

/***/ 8856:
/*!***************************************!*\
  !*** ./src/app/core/badge.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeService": () => (/* binding */ BadgeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let BadgeService = class BadgeService {
    constructor() { }
    getReaderBadge(minutesRead) {
        if (minutesRead > 5000) {
            return 'Book Worm';
        }
        else if (minutesRead > 2500) {
            return 'Page Turner';
        }
        else {
            return 'Getting Started';
        }
    }
};
BadgeService.ctorParameters = () => [];
BadgeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], BadgeService);



/***/ }),

/***/ 7195:
/*!***********************************************!*\
  !*** ./src/app/core/book-resolver.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookResolverService": () => (/* binding */ BookResolverService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.service */ 3943);





let BookResolverService = class BookResolverService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route, state) {
        return this.dataService.getAllBooks()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(err)));
    }
};
BookResolverService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
BookResolverService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], BookResolverService);



/***/ }),

/***/ 9772:
/*!************************************************************!*\
  !*** ./src/app/core/book-tracker-error-handler.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTrackerErrorHandlerService": () => (/* binding */ BookTrackerErrorHandlerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);



let BookTrackerErrorHandlerService = class BookTrackerErrorHandlerService {
    constructor() { }
    handleError(error) {
        let customError = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_0__.BookTrackerError();
        customError.errorNumber = 200;
        customError.message = error.message;
        customError.friendlyMessage = 'An error occurred. Please try again.';
        console.log(customError);
    }
};
BookTrackerErrorHandlerService.ctorParameters = () => [];
BookTrackerErrorHandlerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], BookTrackerErrorHandlerService);



/***/ }),

/***/ 7354:
/*!*******************************************!*\
  !*** ./src/app/core/cache.interceptor.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CACHABLE": () => (/* binding */ CACHABLE),
/* harmony export */   "CacheInterceptor": () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-cache.service */ 74);






const CACHABLE = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpContextToken(() => true);
let CacheInterceptor = class CacheInterceptor {
    constructor(cacheService) {
        this.cacheService = cacheService;
    }
    intercept(req, next) {
        if (!req.context.get(CACHABLE)) {
            return next.handle(req);
        }
        if (req.method !== 'GET') {
            console.log(`Invalidating cache ... ${req} - ${req.url}`);
            this.cacheService.invalidateCache();
            return next.handle(req);
        }
        let cachedData = this.cacheService.get(req.url);
        if (cachedData) {
            console.log(`Obtaining from the cache ${req} - ${req.url}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(cachedData);
        }
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                console.log('Adding item to the cache');
                this.cacheService.put(req.url, event);
            }
        }));
    }
};
CacheInterceptor.ctorParameters = () => [
    { type: _http_cache_service__WEBPACK_IMPORTED_MODULE_0__.HttpCacheService }
];
CacheInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], CacheInterceptor);



/***/ }),

/***/ 3943:
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8307);
/* harmony import */ var app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/data */ 8387);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.interceptor */ 7354);








let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.mostPopularBook = app_data__WEBPACK_IMPORTED_MODULE_0__.allBooks[0];
    }
    setMostPopularBook(popularBook) {
        this.mostPopularBook = popularBook;
    }
    getAllReaders() {
        return app_data__WEBPACK_IMPORTED_MODULE_0__.allReaders;
    }
    getReaderById(id) {
        return app_data__WEBPACK_IMPORTED_MODULE_0__.allReaders.find(reader => reader.readerID === id);
    }
    getAllBooks() {
        console.log("getting books");
        return this.http.get('/api/books', {
            context: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpContext().set(_cache_interceptor__WEBPACK_IMPORTED_MODULE_2__.CACHABLE, false)
        }).
            pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => this.handleHttpError(err)));
    }
    handleHttpError(err) {
        let tracker = new app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_1__.BookTrackerError();
        tracker.errorNumber = 100;
        tracker.friendlyMessage = 'An error occured while receiving the data',
            tracker.message = err.message;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(tracker);
    }
    getBookById(id) {
        let getHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'my-token'
        });
        return this.http.get(`/api/books/${id}`, { headers: getHeaders });
    }
    getOldBooks(id) {
        return this.http.get(`/api/books/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((data) => ({
            bookTitle: data.title,
            year: data.publicationYear
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((oldBook) => console.log(oldBook)));
    }
    addBook(newBook) {
        return this.http.post(`/api/books/`, newBook, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    updateBook(updatedBook) {
        return this.http.put(`/api/books/${updatedBook.bookID}`, updatedBook, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
    deleteBook(id) {
        return this.http.delete(`/api/books/${id}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 74:
/*!********************************************!*\
  !*** ./src/app/core/http-cache.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpCacheService": () => (/* binding */ HttpCacheService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let HttpCacheService = class HttpCacheService {
    constructor() {
        this.requests = {};
    }
    put(url, response) {
        this.requests[url] = response;
    }
    get(url) {
        return this.requests[url];
    }
    invalidateUrl(url) {
        this.requests[url] = undefined;
    }
    invalidateCache() {
        this.requests = {};
    }
};
HttpCacheService.ctorParameters = () => [];
HttpCacheService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], HttpCacheService);



/***/ }),

/***/ 2921:
/*!***************************************************!*\
  !*** ./src/app/core/log-response.interceptors.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogResponseInterceptor": () => (/* binding */ LogResponseInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8307);




let LogResponseInterceptor = class LogResponseInterceptor {
    intercept(req, next) {
        console.log(`LogResponseInterceptor - ${req.url}`);
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }
};
LogResponseInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LogResponseInterceptor);



/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.component.html */ 9306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/models/bookTrackerError */ 5582);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_service_voter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/voter.service */ 749);








let DashboardComponent = class DashboardComponent {
    constructor(dataService, title, voterService, route) {
        this.dataService = dataService;
        this.title = title;
        this.voterService = voterService;
        this.route = route;
    }
    ngOnInit() {
        let data = this.route.snapshot.data['resolvedBooks'];
        if (data instanceof app_models_bookTrackerError__WEBPACK_IMPORTED_MODULE_2__.BookTrackerError) {
            console.log('error ' + data.message);
        }
        else {
            this.allBooks = data;
        }
        this.allReaders = this.dataService.getAllReaders();
        this.mostPopularBook = this.dataService.mostPopularBook;
        this.title.setTitle(`Book Tracker`);
    }
    deleteBook(bookID) {
        this.dataService.deleteBook(bookID).subscribe((data) => {
            let index = this.allBooks.findIndex(book => book.bookID === bookID);
            this.allBooks.splice(index, 1);
        }, (err) => console.log(err));
    }
    deleteReader(readerID) {
        console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
    }
    toggleVote(book) {
        this.voterService.modifyVoter(book);
    }
    hasVoted(book) {
        return this.voterService.checkVoter(book);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title },
    { type: app_service_voter_service__WEBPACK_IMPORTED_MODULE_3__.VoterService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
DashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], DashboardComponent);



/***/ }),

/***/ 8387:
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allReaders": () => (/* binding */ allReaders),
/* harmony export */   "allBooks": () => (/* binding */ allBooks)
/* harmony export */ });
const allReaders = [
    { readerID: 1, name: 'Marie', weeklyReadingGoal: 400, totalMinutesRead: 5600 },
    { readerID: 2, name: 'Daniel', weeklyReadingGoal: 210, totalMinutesRead: 3000 },
    { readerID: 3, name: 'Lanier', weeklyReadingGoal: 140, totalMinutesRead: 600 }
];
const allBooks = [
    { bookID: 1, title: 'Goodnight Moon', author: 'Margaret Wise Brown', publicationYear: 1953, voters: allReaders },
    { bookID: 2, title: 'Winnie-the-Pooh', author: 'A. A. Milne', publicationYear: 1926, voters: [] },
    { bookID: 3, title: 'Where the Wild Things Are', author: 'Maurice Sendak', publicationYear: 1963, voters: [] },
    { bookID: 4, title: 'The Hobbit', author: 'J. R. R. Tolkien', publicationYear: 1937, voters: [] },
    { bookID: 5, title: 'Curious George', author: 'H. A. Rey', publicationYear: 1941, voters: [] },
    { bookID: 6, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', publicationYear: 1865, voters: [] },
];


/***/ }),

/***/ 445:
/*!**************************************************!*\
  !*** ./src/app/edit-book/edit-book.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditBookComponent": () => (/* binding */ EditBookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-book.component.html */ 8367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);





let EditBookComponent = class EditBookComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    ngOnInit() {
        let bookID = parseInt(this.route.snapshot.params['id']);
        this.dataService.getBookById(bookID)
            .subscribe((data) => this.selectedBook = data);
        this.dataService.getOldBooks(bookID)
            .subscribe(((data) => console.log(data)));
    }
    setMostPopular() {
        this.dataService.setMostPopularBook(this.selectedBook);
    }
    saveChanges() {
        this.dataService.updateBook(this.selectedBook).subscribe((data) => console.log(this.selectedBook.title), (err) => console.log(err));
    }
};
EditBookComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService }
];
EditBookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-edit-book',
        template: _raw_loader_edit_book_component_html__WEBPACK_IMPORTED_MODULE_0__.default
    })
], EditBookComponent);



/***/ }),

/***/ 6236:
/*!******************************************************!*\
  !*** ./src/app/edit-reader/edit-reader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditReaderComponent": () => (/* binding */ EditReaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-reader.component.html */ 4644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/badge.service */ 8856);






let EditReaderComponent = class EditReaderComponent {
    constructor(route, dataService, badgeService) {
        this.route = route;
        this.dataService = dataService;
        this.badgeService = badgeService;
    }
    ngOnInit() {
        let readerID = parseInt(this.route.snapshot.params['id']);
        this.selectedReader = this.dataService.getReaderById(readerID);
        this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
    }
    saveChanges() {
        console.warn('Save reader not yet implemented.');
    }
};
EditReaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService },
    { type: app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__.BadgeService }
];
EditReaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-edit-reader',
        template: _raw_loader_edit_reader_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [app_core_badge_service__WEBPACK_IMPORTED_MODULE_2__.BadgeService]
    })
], EditReaderComponent);



/***/ }),

/***/ 5582:
/*!********************************************!*\
  !*** ./src/app/models/bookTrackerError.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookTrackerError": () => (/* binding */ BookTrackerError)
/* harmony export */ });
class BookTrackerError {
}


/***/ }),

/***/ 892:
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/data.service */ 3943);



let AuthService = class AuthService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    login(userName, password) {
        this.currentUser = {
            userName: userName,
            lastName: "Riddle",
            firstName: "Tom",
            id: 1
        };
        this.reader = this.dataService.getAllReaders().filter(reader => reader.name === this.currentUser.userName)[0];
    }
    isLoggedIn() {
        return !!this.currentUser;
    }
    updateCurrentUser(profile) {
        this.currentUser.lastName = profile.lastName;
        this.currentUser.firstName = profile.firstName;
    }
};
AuthService.ctorParameters = () => [
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthService);



/***/ }),

/***/ 749:
/*!******************************************!*\
  !*** ./src/app/service/voter.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoterService": () => (/* binding */ VoterService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var app_core_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/data.service */ 3943);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 892);




let VoterService = class VoterService {
    constructor(authService, datdaService) {
        this.authService = authService;
        this.datdaService = datdaService;
    }
    modifyVoter(book) {
        if (this.checkVoter(book)) {
            let index = book.voters.findIndex(voter => voter.readerID === this.authService.reader.readerID);
            book.voters.splice(index, 1);
        }
        else {
            book.voters.push(this.authService.reader);
            // this.datdaService.updateBook(book);
        }
    }
    checkVoter(book) {
        let retrievedVoter = book.voters.filter(voter => this.authService.reader.readerID === voter.readerID);
        if (retrievedVoter && retrievedVoter.length > 0)
            return true;
        return false;
    }
};
VoterService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: app_core_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService }
];
VoterService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], VoterService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 813:
/*!*******************************************************************************************************************************************!*\
  !*** data:text/css;charset=utf-8;base64,CiAgICAgICAgICAgIHNwYW57bWFyZ2luLWxlZnQ6MnB4fQogICAgICAgICAgICBpe2JvcmRlcjpibGFja30KICAgICAgICA= ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n            span{margin-left:2px}\n            i{border:black}\n        \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNBZ0lDQWdJQ0FnSUhOd1lXNTdiV0Z5WjJsdUxXeGxablE2TW5CNGZRb2dJQ0FnSUNBZ0lDQWdJQ0JwZTJKdmNtUmxjanBpYkdGamEzMEtJQ0FnSUNBZ0lDQT0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtZQUNZLEtBQUssZUFBZTtZQUNwQixFQUFFLFlBQVkiLCJmaWxlIjoiY3NzO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LENpQWdJQ0FnSUNBZ0lDQWdJSE53WVc1N2JXRnlaMmx1TFd4bFpuUTZNbkI0ZlFvZ0lDQWdJQ0FnSUNBZ0lDQnBlMkp2Y21SbGNqcGliR0ZqYTMwS0lDQWdJQ0FnSUNBPSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICAgICAgc3BhbnttYXJnaW4tbGVmdDoycHh9XG4gICAgICAgICAgICBpe2JvcmRlcjpibGFja31cbiAgICAgICAgIl19 */");

/***/ }),

/***/ 8864:
/*!***********************************************************************************************************************************************!*\
  !*** data:text/css;charset=utf-8;base64,CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgIC5lcnJvcntiYWNrZ3JvdW5kOiNmZWNhY2F9CiAgICA= ***!
  \***********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n        em{float:right;color:red}\n        .error{background:#fecaca}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNBZ0lDQWdaVzE3Wm14dllYUTZjbWxuYUhRN1kyOXNiM0k2Y21Wa2ZRb2dJQ0FnSUNBZ0lDNWxjbkp2Y250aVlXTnJaM0p2ZFc1a09pTm1aV05oWTJGOUNpQWdJQ0E9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUSxHQUFHLFdBQVcsQ0FBQyxTQUFTO1FBQ3hCLE9BQU8sa0JBQWtCIiwiZmlsZSI6ImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNBZ0lDQWdaVzE3Wm14dllYUTZjbWxuYUhRN1kyOXNiM0k2Y21Wa2ZRb2dJQ0FnSUNBZ0lDNWxjbkp2Y250aVlXTnJaM0p2ZFc1a09pTm1aV05oWTJGOUNpQWdJQ0E9Iiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIGVte2Zsb2F0OnJpZ2h0O2NvbG9yOnJlZH1cbiAgICAgICAgLmVycm9ye2JhY2tncm91bmQ6I2ZlY2FjYX1cbiAgICAiXX0= */");

/***/ }),

/***/ 2600:
/*!***********************************************************************************************************!*\
  !*** data:text/css;charset=utf-8;base64,CiAgICAgICAgZW17ZmxvYXQ6cmlnaHQ7Y29sb3I6cmVkfQogICAgICAgICAgICA= ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n        em{float:right;color:red}\n            \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNBZ0lDQWdaVzE3Wm14dllYUTZjbWxuYUhRN1kyOXNiM0k2Y21Wa2ZRb2dJQ0FnSUNBZ0lDQWdJQ0E9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFDUSxHQUFHLFdBQVcsQ0FBQyxTQUFTIiwiZmlsZSI6ImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNBZ0lDQWdaVzE3Wm14dllYUTZjbWxuYUhRN1kyOXNiM0k2Y21Wa2ZRb2dJQ0FnSUNBZ0lDQWdJQ0E9Iiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIGVte2Zsb2F0OnJpZ2h0O2NvbG9yOnJlZH1cbiAgICAgICAgICAgICJdfQ== */");

/***/ }),

/***/ 352:
/*!*******************************************************************************************!*\
  !*** data:text/css;charset=utf-8;base64,CiAgICBlbXtmbG9hdDpyaWdodDtjb2xvcjpyZWR9CiAgICA= ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n    em{float:right;color:red}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcztjaGFyc2V0PXV0Zi04O2Jhc2U2NCxDaUFnSUNCbGJYdG1iRzloZERweWFXZG9kRHRqYjJ4dmNqcHlaV1I5Q2lBZ0lDQT0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJLEdBQUcsV0FBVyxDQUFDLFNBQVMiLCJmaWxlIjoiY3NzO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LENpQWdJQ0JsYlh0bWJHOWhkRHB5YVdkb2REdGpiMnh2Y2pweVpXUjlDaUFnSUNBPSIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGVte2Zsb2F0OnJpZ2h0O2NvbG9yOnJlZH1cbiAgICAiXX0= */");

/***/ }),

/***/ 7052:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.component.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form [formGroup]=\"bookForm\" (ngSubmit)=\"saveBook(bookForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add New Book</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\r\n          <em *ngIf=\"bookForm.invalid && title.touched && bookForm.controls.title.errors.required\">Required</em>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" formControlName=\"title\" name=\"title\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <em *ngIf=\"bookForm.invalid && author.touched && bookForm.controls.author.errors.required\">Required</em>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" formControlName=\"author\" name=\"author\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <em *ngIf=\"bookForm.invalid && publicationYear.touched && bookForm.controls.publicationYear.errors.required\">Required</em>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" formControlName=\"publicationYear\" name=\"publicationYear\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"bookForm.invalid\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 1699:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-reader/add-reader.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form #addReaderForm=\"ngForm\" (ngSubmit)=\"saveReader(addReaderForm.value)\" class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Add Reader</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" name=\"name\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" name=\"weeklyReadingGoal\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" name=\"totalMinutesRead\" ngModel>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <!-- Brand and toggle get grouped for better mobile display -->\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\r\n                data-target=\"#bs-example-navbar-collapse-1\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">Book Tracker</a>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/addbook']\">Add Book<span class=\"sr-only\">(current)</span></a></li>\r\n                <li><a [routerLink]=\"['/addreader']\">Add Reader</a></li>\r\n\r\n                <li><div *ngIf=\"!authService.isLoggedIn()\"><a [routerLink]=\"['login']\">Login</a></div></li>\r\n                <li><div *ngIf=\"authService.isLoggedIn()\"><a [routerLink]=\"['profile']\">Welcome {{authService.currentUser.userName}}</a></div></li>\r\n                <!-- <li><div ><a [routerLink]=\"['profile']\">Profile</a></div></li> -->\r\n            </ul>\r\n        </div><!-- /.navbar-collapse -->\r\n    </div><!-- /.container-fluid -->\r\n</nav>\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ 8155:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/login-component/login.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Login</h1>\r\n<hr />\r\n<div class=\"col-md-4\">\r\n    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n        <div class=\"form-group\">\r\n            <label for=\"userName\">User Name:</label>\r\n            <em *ngIf=\"(loginForm.controls.userName?.invalid && loginForm.controls.userName?.touched || mouseOverLogin)\">Required</em>\r\n            <input (ngModel)=\"userName\" id=\"userName\" name=\"userName\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"User Name...\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password:</label>\r\n            <em *ngIf=\"(loginForm.controls.password?.invalid && loginForm.controls.password?.touched || mouseOverLogin)\">Required</em>\r\n            <input (ngModel)=\"password\" id=\"password\" name=\"password\" type=\"password\" class=\"form-control\"\r\n                placeholder=\"Password...\" required />\r\n        </div>\r\n\r\n        <span (mouseover)=\"mouseOverLogin=true\" (mouseleave)=\"mouseOverLogin=false\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid\">Login</button>\r\n            <button type=\"button\" class=\"btn btn-default\" [routerLink]=\"['/dashboard']\">Cancel</button>\r\n        </span>\r\n    </form>\r\n</div>");

/***/ }),

/***/ 5250:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/profile-component/profile.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\r\n    <h1>Edit Your Profile </h1>\r\n    <hr>\r\n    <div class=\"col-md-4\">\r\n        <form autocomplete=\"off\" [formGroup]=\"profileForm\" novalidate (ngSubmit)=\"save(profileForm.value)\">\r\n            <div class=\"form-group\">\r\n                <label for=\"firstName\">First Name:</label>\r\n                <em *ngIf=\"!isValidFirstName() && profileForm.controls.firstName.errors.required\">Required</em>\r\n                <em *ngIf=\"!isValidFirstName() && profileForm.controls.firstName.errors.pattern\">Enter Appropriate Value</em>\r\n                <input id=\"firstName\" formControlName=\"firstName\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"First Name...\" [ngClass]=\"{'error' : !isValidFirstName()}\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lastName\">Last Name:</label>\r\n                <input id=\"lastName\" formControlName=\"lastName\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"Last Name...\" [ngClass]=\"{'error' : !isValidLastName()}\" />\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ 4580:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/upvote-component/upvote.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<span *ngIf=\"user\" (click) = \"onClick()\">\r\n    <!-- <span *ngIf=\"!voted\"><span class=\"glyphicon glyphicon-heart\"></span></span>\r\n    <span *ngIf=\"voted\">Unvote</span> -->\r\n    <i [style.color]=\"iconColor\" class=\"glyphicon glyphicon-heart\"></i>\r\n</span>\r\n<span>\r\n    {{count}}\r\n</span>");

/***/ }),

/***/ 9306:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">All Books</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n        <li *ngFor='let book of allBooks'>\r\n          <i>{{book.title}}</i>\r\n          <a [routerLink]=\"['/editbook', book.bookID]\"> Edit </a>\r\n          <a (click)=\"deleteBook(book.bookID)\">Delete</a>\r\n          <app-upvote (vote)=\"toggleVote(book)\" [voted]=\"hasVoted(book)\" [count]=\"book.voters.length\"></app-upvote>\r\n        </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">All Readers</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n        <li *ngFor='let reader of allReaders'>\r\n          {{reader.name}}\r\n          <a [routerLink]=\"['/editreader', reader.readerID]\">Edit</a>\r\n          <a (click)=\"deleteReader(reader.readerID)\"> Delete </a>\r\n        </li>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Most Popular Book</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <i>{{mostPopularBook.title}}</i> by {{mostPopularBook.author}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 8367:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.component.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Book</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTitle\" class=\"col-lg-3 control-label\">Title</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTitle\" placeholder=\"Title\" [(ngModel)]=\"selectedBook && selectedBook.title\" name=\"title\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAuthor\" class=\"col-lg-3 control-label\">Author</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputAuthor\" placeholder=\"Author\" [(ngModel)]=\"selectedBook && selectedBook.author\" name=\"author\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputYear\" class=\"col-lg-3 control-label\">Year</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputYear\" placeholder=\"Year Published\" [(ngModel)]=\"selectedBook && selectedBook.publicationYear\" name=\"publicationYear\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-8 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"setMostPopular()\">Set As Most Popular</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ 4644:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-reader/edit-reader.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"col-lg-5\">\r\n  <div class=\"well bs-component\">\r\n    <form class=\"form-horizontal\">\r\n      <fieldset>\r\n        <legend>Edit Reader</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Name</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Name\" [(ngModel)]=\"selectedReader && selectedReader.name\" name=\"name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputGoal\" class=\"col-lg-3 control-label\">Weekly Goal</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Weekly Goal\" [(ngModel)]=\"selectedReader && selectedReader.weeklyReadingGoal\" name=\"weeklyReaddingGoal\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Total Read</label>\r\n          <div class=\"col-lg-8\">\r\n            <input type=\"text\" class=\"form-control\" id=\"inputTotal\" placeholder=\"Total Minutes Read\" [(ngModel)]=\"selectedReader && selectedReader.totalMinutesRead\" name=\"totalMinutesRead\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"inputTotal\" class=\"col-lg-3 control-label\">Current Badge</label>\r\n          <div class=\"col-lg-8\">\r\n            {{ currentBadge }}\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n          <div class=\"col-lg-10 col-lg-offset-3\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveChanges()\">Save</button>\r\n          </div>\r\n        </div>\r\n      </fieldset>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map