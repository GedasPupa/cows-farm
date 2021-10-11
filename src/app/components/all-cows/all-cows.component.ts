import { Component, OnInit } from '@angular/core';
import { ICow } from 'src/app/models/Cow';
import { CowsService } from 'src/app/services/cows.service';

@Component({
  selector: 'app-all-cows',
  template: `
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
}
