import { Injectable } from '@angular/core';
import { Job } from './job.service';


const jobsList = [
  new Job().parse({
    _id: "1",
    jobName: "Back End Developer",
    company: "TikTok",
    foundOn: "linkedin",
    jobDescription: "http://",
    website: "http://",
    applicationTracker: "http://",
    dateApplied: new Date()
  }),
  new Job().parse({
    _id: "2",
    jobName: "Back End Developer",
    company: "TikTok",
    foundOn: "linkedin",
    jobDescription: "http://",
    website: "http://",
    applicationTracker: "http://",
    dateApplied: new Date()
  }),
  new Job().parse({
    _id: "3",
    jobName: "Back End Developer",
    company: "TikTok",
    foundOn: "linkedin",
    jobDescription: "http://",
    website: "http://",
    applicationTracker: "http://",
    dateApplied: new Date()
  }),
  new Job().parse({
    _id: "4",
    jobName: "Back End Developer",
    company: "TikTok",
    foundOn: "linkedin",
    jobDescription: "http://",
    website: "http://",
    applicationTracker: "http://",
    dateApplied: new Date()
  })
]

@Injectable({
  providedIn: 'root'
})
export class JobDataService {

  constructor() { }

  getJobs():Job[] {
    return jobsList;
  }

  getJob(id: string):Job | undefined{
    return jobsList.find(job => job.id === id);
  }

  addJob(job: Job, done: (job: Job) => void) {
    job.id = (Math.random() * 10).toString();
    jobsList.push(job);
    done(job);
  }

  deleteJob(id: string, done: (err: string|null, success: string|null) => void) {
    let index = jobsList.findIndex(job => job.id == id);
    if (index === -1) {
      done("Job not found", null);
    } else {
      jobsList.splice(index, 1);
      done(null, `Job ${id} successfully deleted!!`)
    }
  }
}
