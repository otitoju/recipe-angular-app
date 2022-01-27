import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string = ""
  email: string = ""
  password: string = ""

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  signUp(): void {
    this.userService.registerUser(this.name, this.email, this.password).subscribe((res:any) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }

}
