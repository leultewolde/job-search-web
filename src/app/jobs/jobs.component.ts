import { Component } from '@angular/core';
import { JobDataService } from '../job-data.service';
import { Job } from '../job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: Job[];

  constructor(private jobsData:JobDataService) {
    this.jobs = this.jobsData.getJobs();
  }
}
