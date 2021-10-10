import { ICow } from 'src/app/models/Cow';
import { CowsService } from './../../services/cows.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.css'],
})
export class CowComponent implements OnInit, OnDestroy {
  id: string | null = null;
  cow!: ICow;
  sub: any;
  formValid: boolean = true;

  cow2: ICow = {
    id: 0,
    name: '',
    weight: 0,
    total_milk: 0,
    last_milk_time: '',
  };

  @ViewChild('formInfo') formInfo!: NgForm;
  @ViewChild('milkInput') milkInfo!: NgForm;
  @ViewChild('dateInput') dateInput!: NgForm;
  @ViewChild('inName') inName!: NgForm;
  @ViewChild('inWeight') inWeight!: NgForm;
  @ViewChild('inMilk') inMilk!: NgForm;
  @ViewChild('inDate') inDate!: NgForm;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cowsService: CowsService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.sub = this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');

      // subscribe only if ID is not null:
      if (this.id !== null) {
        this._cowsService.getOneCow(+this.id).subscribe(
          (res) => {
            this.cow = res[0];
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['/cows']);
  }

  onCreate() {
    this.cow2.name = this.inName.value;
    this.cow2.weight = +this.inWeight.value;
    this.inMilk.value == ''
      ? (this.cow2.total_milk = 0)
      : (this.cow2.total_milk = +this.inMilk.value);
    this.inDate.value == ''
      ? (this.cow2.last_milk_time = new Date().toISOString().slice(0, 16))
      : (this.cow2.last_milk_time = this.inDate.value);
    this._cowsService.createCow(this.cow2).subscribe(
      (res) => {
        alert(`Cow ${this.cow2.name} successfully created and added to DB!`);
        this._router.navigate(['/cows']);
      },
      (err) => console.log(err)
    );
  }

  onUpdate(): void {
    this.dateInput.value == ''
      ? (this.cow.last_milk_time = new Date().toISOString().slice(0, 16))
      : (this.cow.last_milk_time = this.dateInput.value);
    this.cow!.total_milk += +this.milkInfo.value;
    if (this.formInfo.dirty) {
      this._cowsService.updateCow(this.cow).subscribe(
        (res) => {
          alert(`Cow ${this.cow.name} successfully updated!`);
          this._router.navigate([`/cows/${this.cow.id}`]);
        },
        (err) => console.log(err)
      );
    } else {
      this.formValid = false;
    }
  }

  onDelete(id: number): void {
    this._cowsService.deleteCow(id).subscribe(
      (res) => {
        alert(`Cow ${this.cow.name} successfully deleted from DB!`);
        this._router.navigate(['/cows']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
