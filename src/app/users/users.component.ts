import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  courses: any;

  constructor(private http: HttpClient)
  {
    
  }

  ngOnInit(): void {

    console.log("users loaded");
    this.http.get('https://localhost:5001/api/users/').subscribe(data => {
      
      this.courses = data;
      console.log('records=>', data);
      //console.log('records', this.records[0].name);
      
    });
  }

}
