import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisposeService {

  response = {
    statusUpdate: 0,
    reimbursementID: 0
  };

  constructor(private httpClient: HttpClient) { }

  setResponse(code, entryID) {
    this.response.statusUpdate = code;
    this.response.reimbursementID = entryID;
  }

  dispose(newStatus: number, entryID: number) {
    this.setResponse(newStatus, entryID);
    const url = `${environment.apiUrl}/dispose`;
    return this.httpClient.post(url, this.response);
  }
}
