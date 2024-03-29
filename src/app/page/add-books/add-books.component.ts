import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [NavComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
export class AddBooksComponent {
  constructor(private http: HttpClient) { }

  public book = {
    isbn: "",
    title: "",
    author: "",
    qty: "",
    catagory: ""
  }
  addBook() {
    this.http.post("http://localhost:8080/book/add", this.book)
      .subscribe((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${this.book.title} book added succes full`,
          showConfirmButton: false,
          timer: 1500
        });
        this.book = {
          isbn: "",
          title: "",
          author: "",
          qty: "",
          catagory: ""
        }


      })


  }
}
