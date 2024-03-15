import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-transiton',
  standalone: true,
  imports: [NavComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './view-all-transiton.component.html',
  styleUrl: './view-all-transiton.component.css'
})
export class ViewAllTransitonComponent implements OnInit {
  public allborrowBook: any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.viewAllTransition();
  }
  viewAllTransition() {
    this.http.get("http://localhost:8082/borrow-Book/get")
    .subscribe((data)=>{
      this.allborrowBook=data;
    })
  }

}
