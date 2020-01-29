import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class CommonService {
  // Base url
  baseurl = 'http://localhost:3000';
  adnbaseurl = 'https://localhost:5001/api/Sports';
  serverSportRoute = "server/sport/";
  clientSportRoute = "client/sport/";
  serverSchoolRoute = "server/school/";
  clientSchoolRoute = "client/school/";
  serverParticipantRoute = "server/participant/";
  clientParticipantRoute = "client/participant/";



  constructor(private http: HttpClient, private socket: Socket) { }
  sport = this.socket.fromEvent(this.clientSportRoute + 'get');
  sportpost = this.socket.fromEvent(this.clientSportRoute + 'post');
  sports = this.socket.fromEvent(this.clientSportRoute + 'getall');
  sportdelete = this.socket.fromEvent(this.clientSportRoute + 'delete');

  school = this.socket.fromEvent(this.clientSchoolRoute + 'get');
  schoolpost = this.socket.fromEvent(this.clientSchoolRoute + 'post');
  schools = this.socket.fromEvent(this.clientSchoolRoute + 'getall');
  schooldelete = this.socket.fromEvent(this.clientSchoolRoute + 'delete');

  participant = this.socket.fromEvent(this.clientParticipantRoute + 'get');
  participantpost = this.socket.fromEvent(this.clientParticipantRoute + 'post');
  participants = this.socket.fromEvent(this.clientParticipantRoute + 'getall');
  participantdelete = this.socket.fromEvent(this.clientParticipantRoute + 'delete');

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  //Sport
  addSport(data) {
    // this.socket.emit(this.serverSportRoute + 'post', data);
    //return this.http.post(this.baseurl + '/addsport', data, this.httpOptions);
    return this.http.post(this.adnbaseurl, data, this.httpOptions).toPromise();
  }

  updateSport(data) {
    this.socket.emit(this.serverSportRoute + 'put', (data));
  }

  listSport() {
    // this.socket.emit(this.serverSportRoute + 'getall');
    //return this.http.get(this.baseurl + '/listsport');
    return this.http.get(this.adnbaseurl).toPromise();
  }

  getSport(id: string) {
    this.socket.emit(this.serverSportRoute + 'get', id);
  }

  deleteSport(id: string) {
    this.socket.emit(this.serverSportRoute + 'delete', id);
  }



  //School
  addSchool(data) {
    this.socket.emit(this.serverSchoolRoute + 'post', data);
  }

  updateSchool(data) {
    this.socket.emit(this.serverSchoolRoute + 'put', (data));
  }

  listSchool() {
    this.socket.emit(this.serverSchoolRoute + 'getall');
  }

  getSchool(id: string) {
    this.socket.emit(this.serverSchoolRoute + 'get', id);
  }

  deleteSchool(id: string) {
    this.socket.emit(this.serverSchoolRoute + 'delete', id);
  }


  //Participant
  addParticipant(data) {
    this.socket.emit(this.serverParticipantRoute + 'post', data);
  }

  updateParticipant(data) {
    this.socket.emit(this.serverParticipantRoute + 'put', (data));
  }

  listParticipant() {
    this.socket.emit(this.serverParticipantRoute + 'getall');
  }

  getParticipant(id: string) {
    this.socket.emit(this.serverParticipantRoute + 'get', id);
  }

  deleteParticipant(id: string) {
    this.socket.emit(this.serverParticipantRoute + 'delete', id);
  }

}
