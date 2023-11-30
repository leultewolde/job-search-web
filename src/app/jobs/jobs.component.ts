import { Component, ViewChild } from '@angular/core';
import { JobDataService } from '../job-data.service';
import { Job } from '../job.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: Job[];

  #newJobForm!: FormGroup;
  formIsInvalid: boolean = false;

  get newJobForm(): FormGroup { return this.#newJobForm; }

  constructor(private _formBuilder: FormBuilder, private jobsData: JobDataService, private modalService: NgbModal) {
    this.jobs = this.jobsData.getJobs();

    let now = new Date();

    this.#newJobForm = this._formBuilder.group({
      jobName: null,
      company: "",
      foundOn: "",
      jobDescription: "",
      website: "",
      applicationTracker: "",
      dateApplied: { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() }
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  addJob() {
    let formValues = this.newJobForm.value;
    this.formIsInvalid = this.checkIfFormInvalid(formValues);
    if (!this.formIsInvalid) {
      let dateApplied = formValues.dateApplied;
      let formattedDateApplied = new Date(`${dateApplied.year}/${dateApplied.month}/${dateApplied.day}`);

      let newJob: Job = new Job().parse({
        ...formValues,
        dateApplied: formattedDateApplied
      });

      this.jobsData.addJob(newJob, (job: Job) => {
        this.modalService.dismissAll();
        this.newJobForm.reset();
      });
    }
  }

  private checkIfFormInvalid(formValues: any) {
    for (const key in formValues) {
      if (Object.prototype.hasOwnProperty.call(formValues, key)) {
        if (key === "jobName" || key === "company" || key === "dateApplied") {
          if (formValues[key] === null || formValues[key] === "") {
            return true;
          }
        }
      }
    }
    return false;
  }
}
