import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICow } from 'src/app/models/Cow';
import { CowsService } from 'src/app/services/cows.service';

@Component({
  selector: 'app-all-cows',
  template: `
    <form #newCow="ngForm" class="newCow">
      <h6>Add new cow</h6>
      <p *ngIf="!formValid" class="alert alert-danger">
        The form is not valid. Please check all fields!
      </p>
      <div>Name: <input type="text" ngModel name="name" required /></div>
      <div>
        Wight:
        <input
          type="number"
          min="0"
          max="9999"
          ngModel
          name="weight"
          required
        />
      </div>
      <div>
        Milk:
        <input
          type="number"
          min="0"
          max="999999"
          ngModel
          name="total_milk"
          required
        />
      </div>
      <div>
        Date:
        <input type="datetime-local" ngModel name="last_milk_time" required />
      </div>
      <button type="submit" (click)="addCow()">Add</button>
    </form>
    <div class="cows-list">
      <app-one-cow *ngFor="let cow of cows" [cowFromParent]="cow"></app-one-cow>
    </div>
  `,
  styleUrls: ['./all-cows.component.css'],
})
export class AllCowsComponent implements OnInit {
  constructor(private _cowsService: CowsService) {}
  cows: ICow[] = [];
  filteredCows: ICow[] = [];
  field: string = '';
  sortAsc: boolean = true;
  dataLoaded: boolean = false;
  cow: any;
  formValid: boolean = true;

  @ViewChild('newCow') newCow!: NgForm;
  ngOnInit(): void {
    this._cowsService.getAllCows().subscribe(
      (res) => {
        this.cows = res;
        this.filteredCows = this.cows;
        this.dataLoaded = true;
      },
      (err) => {
        console.log(err);
        this.dataLoaded = true;
      }
    );
  }

  addCow() {
    if (this.newCow.valid) {
      console.log(this.newCow.value);
      this.cow = this._cowsService.createCow(this.newCow.value).subscribe(
        (res) => {
          this.cows.push(this.newCow.value);
          this.filteredCows = this.cows;
        },
        (err) => console.log(err)
      );
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
}
