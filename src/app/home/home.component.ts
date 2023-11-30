import { Component } from '@angular/core';
import { JobDataService } from '../job-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs: any[];

  constructor(private jobsData:JobDataService) {
    this.jobs = this.jobsData.getJobs();
  }
}
