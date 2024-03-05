import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';

@Component({
  selector: 'app-view-all-burrowers',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule,NavComponent],
  templateUrl: './view-all-burrowers.component.html',
  styleUrl: './view-all-burrowers.component.css'
})
export class ViewAllBurrowersComponent implements OnInit {
  private http;
  public allBurrowers: any ;
  public selectedBurrower: any = null;
  private baseUrl="http://localhost:8081"

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.viewAllBurrowers();
  }

  viewAllBurrowers() {
    this.http.get(this.baseUrl+"/burrow/get")
      .subscribe((data) => {
        this.allBurrowers = data;


      });
  }

  setSelesctedBurrower(burrower: any) {
    this.selectedBurrower = burrower;
   

  }

  addBurrower() {
    this.http.post(this.baseUrl+"/burrow/add", this.selectedBurrower)
      .subscribe((data) => {
        console.log(true);

      })
  }
  deleteBurrower() {
    this.http.delete(this.baseUrl+"/burrow/" + this.selectedBurrower.burrowId)
      .subscribe((data) => {
        this.viewAllBurrowers();
        console.log(data);
        Swal.fire({
          title: "Delete Sucess!",
          text: `${this.selectedBurrower.userName} user is deleted`,
          icon: "success"
        });
        this.selectedBurrower = null;

      })
  }
}
