import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementsService {
  private entry = {};

  getDetails(id: number) {
    console.log(id);
    const url = `${environment.apiUrl}/details`;
    return this.httpClient.post(url, id);
  }

  setEntry(entry) {
    this.entry = entry;
  }

  getEntry() {
    return this.entry;
  }

  constructor(private httpClient: HttpClient) { }
}
