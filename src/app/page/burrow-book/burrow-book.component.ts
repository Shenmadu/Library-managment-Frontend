import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-burrow-book',
  standalone: true,
  imports: [NavComponent,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './burrow-book.component.html',
  styleUrl: './burrow-book.component.css'
})
export class BurrowBookComponent {
  constructor(private http:HttpClient){}

  public userName:any;

  serach(){
    this.http.get(`http://localhost:8081/burrow/getburrower/${this.userName}`)
    .subscribe((data)=>{
      console.log(data);
    })
    
    
  }
}
