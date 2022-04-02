import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: string[];
  curTask: string;
  warning: boolean;

  constructor() {
    this.tasks = [];
    this.curTask = '';
    this.warning = false;
  }

  add(): void | null {
    if (this.curTask === '') {
      this.warning = true;
      return null;
    }
    this.tasks.push(this.curTask);
    this.warning = false;
    this.curTask = '';
    this.save();
  }

  remove(taksId: number): void {
    this.tasks.splice(taksId, 1);
    this.save();
  }

  show(): string[] {
    return JSON.parse(localStorage.getItem('userTaks'));
  }

  private save(): void {
    localStorage.setItem('userTaks', JSON.stringify(this.tasks));
    console.log(localStorage.getItem('userTaks'))
  }
}
