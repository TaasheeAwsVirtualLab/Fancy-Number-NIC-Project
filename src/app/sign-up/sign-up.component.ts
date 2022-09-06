import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
 
   formGroup: any;
   msg:any;
   signUpForm= new FormGroup({
     firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
     lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
     email: new FormControl('', [Validators.required, Validators.email]),
     mobileNo:new FormControl('',[Validators.required,    Validators.pattern("^[0-9]*$"),
     Validators.minLength(10), Validators.maxLength(10)])
   });
 
   constructor(private formBuilder: FormBuilder, private myser:MyserviceService, private router: Router) { }
 
   ngOnInit(): void {
 
   }
 
 
   signUp(){
     if (this.signUpForm.valid) {
       this.myser.signupForm(this.signUpForm.value).subscribe((res:any)=>{
 
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
     else {
       this.markFieldsAsTouched(this.signUpForm);
     }
   }
 
   /* MarkTouched Logic */
   markFieldsAsTouched(form: AbstractControl): void {
       form.markAsTouched({onlySelf: true});
       if (form instanceof FormArray || form instanceof FormGroup) {
         Object.values(form.controls).forEach(this.markFieldsAsTouched);
       }
     }
   }


    

