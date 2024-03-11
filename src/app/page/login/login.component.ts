import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public user: any = {
    email: "",
    password: ""
  }
  constructor(private http: HttpClient, private router: Router) { };

  logIn() {
    this.http.post("http://localhost:8081/login/request-login", this.user)
      .subscribe((res: any) => {
        console.log(res);
        if (res == true) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Welcome!",
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/home']);

        } else {
          Swal.fire({
            icon: "error",
            position: "top-end",
            title: "Oops...",
            text: "Something went wrong try agin!",
            showConfirmButton: false,
            timer: 1500
          });
          console.log("invalid");
        }

      })
  }
}
