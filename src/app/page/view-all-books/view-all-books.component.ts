import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//inheritance 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],//without app module ts import http clientModule
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit {
  private http;
  public booklist: any = {};
  public selectedBook: any=null;
  

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loardBooks();
  }

  loardBooks() {
    this.http.get("http://localhost:8080/book/get") //asyncronize process
      .subscribe((data) => {
        this.booklist = data;
        console.log(data);

      })
  }

  deleteBook() {
    let api = "http://localhost:8080/book/" + this.selectedBook.id;
    this.http.delete(api,{responseType:'text'}).subscribe((responce:string) => {
      console.log("data");
      
      this.loardBooks();
      this.selectedBook = null;


    })

  }
  setSelectedBook(book: any) {
    this.selectedBook = book;
    console.log(book.id);

  }

  saveBook(){
    let postApi="http://localhost:8080/book/add";
    this.http.post(postApi,this.selectedBook).subscribe(data=>{
      console.log("saved");
      this.loardBooks();
      this.selectedBook={};
      
    })
  }

}
