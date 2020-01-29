import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../common.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {
  mySchlForm = new FormGroup({
    schl_name: new FormControl(''),
    schl_type: new FormControl(''),
  });

  types = ['Primary', 'Secondary', 'Higher Secondary'];

  school:any = {};

  schools = {};

  vschool = {};

  private readonly notifier: NotifierService;

  constructor(private commonService: CommonService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.commonService.schools.subscribe(schools => this.schools = schools);
    this.commonService.schoolpost.subscribe(schools => this.commonService.listSchool());
    this.commonService.schooldelete.subscribe(schools => this.commonService.listSchool());
    this.commonService.school.subscribe(school => this.vschool = school);
    this.commonService.listSchool();
  }

  editSchool(s) {
    this.school = s;
  }

  viewSchool(s) {
    // this.commonService.getSchool(s.id);
    this.commonService.getSchool(s._id);
  }

  deleteSchool(s) {
    this.notifier.notify("error", "School Deleted!");
    // this.commonService.deleteSchool(s.id);
    this.commonService.deleteSchool(s._id);
  }

  onSubmit() {
    if (this.school._id) {
      this.commonService.updateSchool(this.school);
      this.notifier.notify("success", "School Updated Successfully!");
    }
    else {
      this.commonService.addSchool(this.school);
      this.notifier.notify("success", "School Added Successfully!");
    }
    // this.commonService.addSchool(this.school);
    // this.notifier.notify("success", "School Added Successfully!");
    this.school = {};
   
  }

}
