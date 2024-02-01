import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//inheritance 
import { FormsModule } from '@angular/forms';import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],//without app module ts import http clientModule
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
  private http;
  public booklist:any={};

  constructor(private httpClient : HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.loardBooks();
  }

  loardBooks(){
    this.http.get("http://localhost:8080/book/get") //asyncronize process
    .subscribe((data)=>{
      this.booklist=data;
      console.log(data);
      
    })
  }

}
