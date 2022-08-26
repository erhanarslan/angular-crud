import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private student:StudentsService) { }
  studentData: any=[];
  dtOptions:DataTables.Settings={};

  ngOnInit(): void {
    this.dtOptions= {
      pagingType:'full_numbers',
      pageLength:5,
      processing:true,
    }
    this.student.getAllStudent().subscribe((allData)=>{
      this.studentData=allData;
    });
  }
  removeStudent(student_id: any){
    this.student.removeStudentData(student_id).subscribe((result)=>{
      console.log(result);
    });
    this.ngOnInit();
  }
}
