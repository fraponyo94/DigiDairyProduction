import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/auth-services/token-storage.service';
import { AuthService } from '../auth/auth-services/auth.service';
import { LoginDetails } from '../auth/login-details';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
             './login.component.css'
                
             ]
})
export class LoginComponent implements OnInit {
  navbar: Boolean = false;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false; 
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginDetails;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.navbar = true;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
  
    this.loginInfo = new LoginDetails(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
     
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['/home']);
     
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

//   navbar: Boolean = false;`
//     loginForm: FormGroup;
//     loading = false;
//     submitted = false;
//     returnUrl: string;

//     constructor(
//         private formBuilder: FormBuilder,
//         private route: ActivatedRoute,
//         private router: Router,
//         // private authenticationService: AuthenticationService,
//         // private alertService: AlertService
//     ) {
//         // redirect to home if already logged in
//         // if (this.authenticationService.currentUserValue) { 
//         //     this.router.navigate(['/']);
//         // }
//     }

//     ngOnInit() {
//         this.navbar = true;
//         this.loginForm = this.formBuilder.group({
//             username: ['', Validators.required],
//             password: ['', Validators.required]
//         });

//         // get return url from route parameters or default to '/'
//         this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
//     }

//     // convenience getter for easy access to form fields
//     get f() { return this.loginForm.controls; }

//     onSubmit() {
//         this.submitted = true;

//         // stop here if form is invalid
//         if (this.loginForm.invalid) {
//             return;
//         }

//         this.loading = true;
//         // this.authenticationService.login(this.f.username.value, this.f.password.value)
//         //     .pipe(first())
//         //     .subscribe(
//         //         data => {
//         //             this.router.navigate([this.returnUrl]);
//         //         },
//         //         error => {
//         //             this.alertService.error(error);
//         //             this.loading = false;
//         //         });
//     }

//   // constructor() { }

//   // ngOnInit() {
   
   
//   // }




}
