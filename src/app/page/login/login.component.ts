import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  public user:any={
    email:"",
    password:""
  }
  constructor(private http:HttpClient ,private router:Router){};

  logIn(){
    this.http.post("http://localhost:8081/login/request-login",this.user)
    .subscribe((res:any)=>{
      console.log(res);
      if(res==true){        
        this.router.navigate(['/viewallburrowers']);
        
      }else{
        console.log("invalid");
      }
      
    })
  }
}
