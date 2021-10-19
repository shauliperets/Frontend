import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  date: any;

  coursesForm = new FormGroup({
    'name': new FormControl(),
    'description': new FormControl(),
    'createDate': new FormControl(),
    'updateDate': new FormControl(),
    'subscribes': new FormControl()
  });

  constructor(private http: HttpClient)
  { 
    this.date = new Date().toLocaleString();

    this.coursesForm.controls['createDate'].setValue(this.date);
    this.coursesForm.controls['updateDate'].setValue(this.date);
  }

  courses: any;

  ngOnInit(): void {

    console.log("init loaded");
    this.http.get('https://localhost:5001/api/courses/').subscribe(data => {
      
      this.courses = data;
      console.log('records=>', data);
      //console.log('records', this.records[0].name);
      
    });
  }

  onAdd()
  {
    let course;
    
    course = {
      name: this.coursesForm.controls['name'].value,
      description: this.coursesForm.controls['description'].value,
      createDate: this.coursesForm.controls['createDate'].value,
      updateDate: this.coursesForm.controls['updateDate'].value,
      quantity: (Number)(this.coursesForm.controls['subscribes'].value),
    }

    console.log("courses==>", course)

    this.http.post<any>('https://localhost:5001/api/courses/', course, { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' }) })
      .subscribe(response => {
          console.log('response ==>', response);
        }
      )
  }
}
