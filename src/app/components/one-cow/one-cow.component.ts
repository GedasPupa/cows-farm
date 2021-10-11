import { NgForm } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ICow } from 'src/app/models/Cow';
import { CowsService } from 'src/app/services/cows.service';

@Component({
  selector: 'app-one-cow',
  template: `
    <form class="card" #oneCowInfo="ngForm" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ cowFromParent.name }}</h5>
        <p class="card-text">
          Some quick example text to make up the bulk of the card's content.
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Weight: {{ cowFromParent.weight }}
          <!-- <input name="id" value="{{ cowFromParent.id }}" ngModel /> -->
          <input name="weight" ngModel />
        </li>
        <li class="list-group-item">
          Total Milk: {{ cowFromParent.total_milk }}
          <input name="total_milk" ngModel />
        </li>
        <li class="list-group-item">
          Last Milk Time:<br />{{
            cowFromParent.last_milk_time.slice(0, 16).replace('T', ' ')
          }}
          <input type="datetime-local" name="last_milk_time" ngModel />
        </li>
      </ul>
      <div class="card-body">
        <button
          (click)="onUpdate($event)"
          class="card-link"
          id="{{ cowFromParent.id }}"
        >
          Update
        </button>
        <button (click)="onDelete(cowFromParent.id)" class="card-link">
          Delete
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class OneCowComponent implements OnInit {
  @Input() cowFromParent!: ICow;
  @Output() onDelete1: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('oneCowInfo')
  oneCowInfo!: NgForm;
  constructor(private _cowsService: CowsService) {}
  cow!: ICow;

  ngOnInit(): void {
    this.cow = this.cowFromParent;
  }

  onUpdate($event: any) {
    // console.log(this.oneCowInfo.value);
    // console.log(+$event.path[0].id);
    this.oneCowInfo.value.weight != ''
      ? (this.cow.weight = +this.oneCowInfo.value.weight)
      : undefined;
    this.oneCowInfo.value.total_milk != ''
      ? (this.cow.total_milk += +this.oneCowInfo.value.total_milk)
      : undefined;
    this.cow.last_milk_time =
      this.oneCowInfo.value.last_milk_time != ''
        ? this.oneCowInfo.value.last_milk_time
        : new Date().toISOString().slice(0, 16);
    console.log(this.cow);
    this._cowsService.updateCow(this.cow).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onDelete(id: number): void {
    this.onDelete1.emit(id);
  }
}
