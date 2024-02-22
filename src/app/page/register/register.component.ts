import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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




  public burrower = {
    burrowerFirstName: null,
    burrowerLastName: null,
    address1: null,
    address2: null,
    contactNumber: null,
    email: null,
    country: null,
  }

  constructor(private httpClient: HttpClient) {
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
  saveBurrower() {
    this.http.post("http://localhost:8081/burrow/add", this.burrower)
      .subscribe((data) => {        
        this.burrower = {
          burrowerFirstName: null,
          burrowerLastName: null,
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

      })
  }

}
