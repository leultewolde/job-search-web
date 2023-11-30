import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Job {
  #_id!: string;
  #jobName!: string;
  #company!: string;
  #foundOn!: string;
  #jobDescription!: string;
  #website!: string;
  #applicationTracker!: string;
  #dateApplied!: Date;

  constructor() {
  }

  get id(): string { return this.#_id }
  get jobName(): string { return this.#jobName }
  get company(): string { return this.#company }
  get foundOn(): string { return this.#foundOn }
  get jobDescription(): string { return this.#jobDescription }
  get website(): string { return this.#website }
  get applicationTracker(): string { return this.#applicationTracker }
  get dateApplied(): Date { return this.#dateApplied }

  set id(id: string) { this.#_id = id }
  set jobName(jobName: string) { this.#jobName = jobName }
  set company(company: string) { this.#company = company }
  set foundOn(foundOn: string) { this.#foundOn = foundOn }
  set jobDescription(jobDescription: string) { this.#jobDescription = jobDescription }
  set website(website: string) { this.#website = website }
  set applicationTracker(applicationTracker: string) { this.#applicationTracker = applicationTracker }
  set dateApplied(dateApplied: Date) { this.#dateApplied = dateApplied }

  parse(object: any) {
    this.#_id = object["_id"];
    this.#jobName = object["jobName"];
    this.#company = object["company"];
    this.#foundOn = object["foundOn"];
    this.#jobDescription = object["jobDescription"];
    this.#website = object["website"];
    this.#applicationTracker = object["applicationTracker"];
    this.#dateApplied = object["dateApplied"];
    return this;
  }
}
