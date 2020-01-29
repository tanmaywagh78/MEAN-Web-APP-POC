import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from "../common.service";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  myPartForm = new FormGroup({
    p_name: new FormControl(''),
    p_standard: new FormControl(''),
    sportId: new FormControl(''),
    schoolId: new FormControl(''),
  });

  schools={};

  sports={};

  participant:any = {};

  participants = {};

  vparticipant = {};

  private readonly notifier: NotifierService;

  constructor(private commonService: CommonService, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  ngOnInit() {
    this.commonService.schools.subscribe(schools => this.schools = schools);
    this.commonService.listSchool();
    this.commonService.sports.subscribe(sports => this.sports = sports);
    this.commonService.listSport();
    this.commonService.participants.subscribe(participants => this.participants = participants);
    this.commonService.participantpost.subscribe(participant => this.commonService.listParticipant());
    this.commonService.participantdelete.subscribe(participant => this.commonService.listParticipant());
    this.commonService.participant.subscribe(participant => this.vparticipant = participant);
    this.commonService.listParticipant();
  }

  editParticipant(p) {
    this.participant = p;
  }

  viewParticipant(p) {
    this.commonService.getParticipant(p._id);
    // this.commonService.getParticipant(p.id);
  }

  deleteParticipant(p) {
    this.notifier.notify("error", "Participant Deleted!");
    this.commonService.deleteParticipant(p._id);
    // this.commonService.deleteParticipant(p.id);
  }

  onSubmit() {
    if (this.participant._id) {
      this.commonService.updateParticipant(this.participant);
      this.notifier.notify("success", "Participant Updated Successfully!");
    }
    else {
      this.commonService.addParticipant(this.participant);
    this.notifier.notify("success", "Participant Added Successfully!");
    }
    // this.commonService.addParticipant(this.participant);
    // this.notifier.notify("success", "Participant Added Successfully!");
    this.participant = {};
  }

}
