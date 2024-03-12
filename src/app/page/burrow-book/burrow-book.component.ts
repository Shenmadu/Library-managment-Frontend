import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-burrow-book',
  standalone: true,
  imports: [NavComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './burrow-book.component.html',
  styleUrl: './burrow-book.component.css'
})
export class BurrowBookComponent {
  constructor(private http: HttpClient) { }
  public name: any;
  public user: any;
  public searchBookID: any;
  public book: any;
  public cartList: any = [];

  serach() {
    this.http.get(`http://localhost:8081/burrow/getburrower/${this.name}`)
      .subscribe((data) => {
        this.user = data;
      })
  }
  searchBook() {
    this.http.get(`http://localhost:8080/book/search/${this.searchBookID}`)
      .subscribe((data) => {
        if (data) {
          console.log(data);
          this.book = data;
          Swal.fire({
            title: `"${this.book.title}" Do you want to get this Book?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `Don't`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.cartList.push(data);
              Swal.fire("Added Cart!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });

        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Booking ID!"
          });
        }



      })
  }
}