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
              this.cartList.push(this.book);
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
  bookid: any = [];
  loardBookId() {
    this.cartList.forEach((element: any) => {
      this.bookid.push(element.id);
    });
  }


  borrowBook() {
    this.loardBookId();
    const burrowBook: any = {
      borrowId: this.user.burrowId,
      books: this.bookid,
      date: new Date(),
      fine: ""
    }
    this.http.post("http://localhost:8082/borrow-Book/add", burrowBook)
      .subscribe((data) => {
        Swal.fire({
          title: "Borrow Sucess!",
          text: `Borrow Books succesfull`,
          icon: "success"
        });
        this.name = null;
        this.user = null;
        this.searchBookID = null;
        this.book = null;
        this.cartList = [];
      })

  }
}