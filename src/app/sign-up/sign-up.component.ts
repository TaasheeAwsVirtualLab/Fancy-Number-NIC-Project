import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  /*  Radio Button Logic  */
  isVisible: any;
  isSelected: boolean = true;

  
  msg:any;
  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private myser:MyserviceService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      firstName:[""],
      lastName:[""],
      mobileNo:[""]
    })
  }


  signUp(){
    this.myser.signupForm(this.signUpForm.value).subscribe(res=>{
      console.log(res);
      this.msg=res;
      if(this.msg.result.status==="SUCCESS"){
        alert("sign up succeesfully");
      console.log(res)
      this.router.navigate(['/login']);
      }
      else{
        alert("please enter valid details");
      }
    },
    err=>{
      console.log(err);
    }
    )
  }
}
