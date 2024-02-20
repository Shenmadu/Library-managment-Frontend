import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-all-burrowers',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-burrowers.component.html',
  styleUrl: './view-all-burrowers.component.css'
})
export class ViewAllBurrowersComponent implements OnInit{
  private http;
  public allBurrowers: any= [];

  constructor(private httpClient :HttpClient){
    this.http=httpClient;
  }
  ngOnInit(): void {
    this.viewAllBurrowers();
  }

  viewAllBurrowers(){
    this.http.get("http://localhost:8081/burrow/get")
    .subscribe((data)=>{
     this.allBurrowers=data;
      
      
    });
  }
}
