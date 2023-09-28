import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-daily-opening',
  templateUrl: './daily-opening.component.html',
  styleUrls: ['./daily-opening.component.css']
})
export class DailyOpeningComponent implements OnInit {
  dailyInfo: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/daily-opening').subscribe(
      (info) => this.dailyInfo = info,
      (err) => console.error('Failed to load daily opening information', err)
    );
  }
}