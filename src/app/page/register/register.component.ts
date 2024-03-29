import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  private http;
  public countryList: any;
  public selectedCountry: any;
  public isExist: any;

  public burrower = {
    burrowerFirstName: null,
    burrowerLastName: null,
    userName: null,
    address1: null,
    address2: null,
    contactNumber: null,
    email: null,
    country: null,
  }

  constructor(private httpClient: HttpClient,public router:Router) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.loardCountries();

  }
  loardCountries() {
    let api = "https://restcountries.com/v3.1/all";
    this.http.get(api).subscribe(res => {
      this.countryList = res;
      console.log(res);

    });
  }
  setSelectedCountry(country: any) {
    this.selectedCountry = country;
    console.log(this.setSelectedCountry);

  }
  submit() {
    this.http.get(`http://localhost:8081/burrow/is-exist/${this.burrower.userName}`)
      .subscribe((data) => {        
        this.saveBurrower(data)

      })
  }


  saveBurrower(data: any) {
    if (!data == true) {
      this.http.post("http://localhost:8081/burrow/add", this.burrower)
        .subscribe((data) => {
          this.burrower = {
            burrowerFirstName: null,
            burrowerLastName: null,
            userName: null,
            address1: null,
            address2: null,
            contactNumber: null,
            email: null,
            country: null,
          }
          Swal.fire({
            title: "Register Sucess!",
            text: `Burrower Register succesfull`,
            icon: "success"
          });
          this.router.navigate(["/login"])

        })

    } else {
      Swal.fire({
        title: "Register not sucess!",
        text: `User name already exists`,
        icon: "error"
      });
    }

  }

}
