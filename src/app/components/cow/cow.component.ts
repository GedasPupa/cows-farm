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
  id: any;
  cow: any;
  sub: any;
  formValid: boolean = true;

  @ViewChild('formInfo') formInfo!: NgForm;
  @ViewChild('milkInput') milkInfo!: NgForm;
  @ViewChild('dateInput') dateInput!: NgForm;

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
    this._router.navigate(['cows']);
  }

  onCreate() {}

  onUpdate() {
    this.dateInput.value == ''
      ? (this.cow.last_milk_time = new Date().toISOString().slice(0, 16))
      : (this.cow.last_milk_time = this.dateInput.value);
    this.cow.total_milk += +this.milkInfo.value;
    if (this.formInfo.dirty) {
      this._cowsService.updateCow(this.cow).subscribe(
        (res) => {
          alert(`Cow ${this.cow.name} successfuly updated!`);
          this._router.navigate([`/cows/${this.cow.id}`]);
        },
        (err) => console.log(err)
      );
    } else {
      this.formValid = false;
    }
  }

  onDelete(id: number): void {
    // this._cowsService.deleteOne(id).subscribe(
    //   (res) => {
    //     this.persons = this.persons.filter((p) => p.id !== id);
    //     this.filterData = this.persons;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
}
