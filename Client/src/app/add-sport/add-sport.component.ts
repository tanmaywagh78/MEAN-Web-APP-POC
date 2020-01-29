import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../common.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-sport',
  templateUrl: './add-sport.component.html',
  styleUrls: ['./add-sport.component.css']
})
  export class AddSportComponent implements OnInit {
    myForm = new FormGroup({
      s_name: new FormControl(''),
      s_desc: new FormControl(''),
      s_type: new FormControl('')
    });

    types = ['Primary', 'Secondary', 'Higher Secondary'];

    sport: any = {};

    sports = {};

    vsport = {};

    private readonly notifier: NotifierService;

    constructor(private commonService: CommonService, notifierService: NotifierService) {
      this.notifier = notifierService;
    }

    ngOnInit() {
      // this.commonService.sports.subscribe(sports => this.sports = sports);
      // this.commonService.sportpost.subscribe(sports => this.commonService.listSport());
      // this.commonService.sportdelete.subscribe(sports => this.commonService.listSport());
      // this.commonService.sport.subscribe(sport => this.vsport = sport);
      // this.commonService.listSport();

      this.commonService.listSport().then((res: any) => {this.sports = res;});


      // this.commonService.listSport().subscribe((res: any)=>this.sports = res.result);
    }

    editSport(s) {
      this.sport = s;
    }

    viewSport(s) {
      this.commonService.getSport(s._id);
      // this.commonService.getSport(s.id);
    }

    deleteSport(s) {
      this.notifier.notify("error", "Sport Deleted!");
      this.commonService.deleteSport(s._id);
      // this.commonService.deleteSport(s.id);
    }

    onSubmit() {
      // if (this.sport._id) {
      //   this.commonService.updateSport(this.sport);
      //   this.notifier.notify("success", "Sport Updated Successfully!");
      // }
      // else {
      //   this.commonService.addSport(this.sport);
      //   this.notifier.notify("success", "Sport Added Successfully!");
      // }
      console.log(JSON.stringify(this.myForm.value));
      this.commonService.addSport(JSON.stringify(this.myForm.value)).then(result => {
        console.log(result)
      });

      this.notifier.notify("success", "Sport Added Successfully!");
      this.sport = {};
    }

    // alert(JSON.stringify(this.myForm.value));
    // .subscribe((res: any) => {
    //   if (res.success) this.ngOnInit();
    // });

  }
