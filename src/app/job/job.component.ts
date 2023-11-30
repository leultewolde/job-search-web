import { Component } from '@angular/core';
import { JobDataService } from '../job-data.service';
import { Job } from '../job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  job: Job;
  hasError: boolean = false;
  errMsg: string = "";
  jobNotFound: boolean = false;

  constructor(private jobData: JobDataService, private activeRoute: ActivatedRoute, private modalService: NgbModal, private router: Router) {
    let jobId = this.activeRoute.snapshot.params["id"];
    if (this.jobData.getJob(jobId)) {
      this.jobNotFound = false;
    } else {
      this.jobNotFound = true;
    }
    this.job = this.jobData.getJob(jobId) || new Job();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  deleteJob() {
    this.jobData.deleteJob(this.job.id, (err, success) => {
      if (err) {
        this.hasError = true;
        this.errMsg = err;
      } else {
        this.hasError = false;
        this.router.navigate(["/"])
      }
    })
  }
}
