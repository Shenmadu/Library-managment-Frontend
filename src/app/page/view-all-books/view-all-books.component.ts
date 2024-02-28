import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//inheritance 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';


@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule,NavComponent],//without app module ts import http clientModule
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit {
  private http;
  public booklist: any;
  public selectedBook: any=null;
  private baseURL:string="http://localhost:8080";
  

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loardBooks();
  }

  loardBooks() {
    this.http.get(this.baseURL+"/book/get") //asyncronize process
      .subscribe((data) => {
        this.booklist = data;
        console.log(data);

      })
  }

  deleteBook() {
    let api = this.baseURL+"/book/" + this.selectedBook.id;
    this.http.delete(api,{responseType:'text'}).subscribe((responce:string) => {
      console.log("data");      
      this.loardBooks();     
      Swal.fire({
        title: "Delete Sucess!",
        text: `${this.selectedBook.title} book is deleted`,
        icon: "success"
      });
      this.selectedBook = null;


    })

  }
  setSelectedBook(book: any) {
    this.selectedBook = book;
    console.log(book.id);

  }

  saveBook(){
    let postApi=this.baseURL+"/book/add";
    this.http.post(postApi,this.selectedBook).subscribe(data=>{
      console.log("saved");
      this.loardBooks();
      Swal.fire({
        title: "Update Sucess!",
        text: `${this.selectedBook.isbn} book is updated`,
        icon: "success"
      });
      this.selectedBook={};
      
    })
  }

}
