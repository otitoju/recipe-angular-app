import { Component, OnInit } from '@angular/core';
import { UserService } from '../../users.service'
import { TokenStorageService } from 'src/app/session-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    email: string = ""
    password: string = ""
    hasError: boolean = false

  isLoggedIn: boolean = false

  constructor(
    private service: UserService, 
    private tokenStorage: TokenStorageService, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  
  handleLogin(): void {
    if(this.email == "") {
      this.hasError = true
    }
    //const {email, password} = this.state
    this.service.loginUser(this.email, this.password).subscribe((res:any) =>{
      this.tokenStorage.saveToken(res.token)
      this.tokenStorage.saveUser(res)
      this.isLoggedIn = true
      if(res.message) {
        this.reloadPage()
        //this.navigate()
      }
      
    }, error => console.log(error.error.message))
  }

  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

  navigate(){
    this.router.navigate(['/dashboard'], { relativeTo: this.route })
  }

  reloadPage(): void {
    this.navigate()
  }

}

// onSubmit(): void {
//   const { username, password } = this.form;

//   this.authService.login(username, password).subscribe(
//     data => {
//       this.tokenStorage.saveToken(data.accessToken);
//       this.tokenStorage.saveUser(data);

//       this.isLoginFailed = false;
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//       this.reloadPage();
//     },
//     err => {
//       this.errorMessage = err.error.message;
//       this.isLoginFailed = true;
//     }
//   );
// }
//https://www.bezkoder.com/angular-12-jwt-auth/


// logout(): void {
//   this.tokenStorageService.signOut();
//   window.location.reload();
// }