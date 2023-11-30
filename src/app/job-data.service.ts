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
}
