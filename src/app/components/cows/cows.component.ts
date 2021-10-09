import { CowsService } from './../../services/cows.service';
import { Component, OnInit } from '@angular/core';
import { ICow } from 'src/app/models/cow';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css'],
})
export class CowsComponent implements OnInit {
  constructor(private _cowsService: CowsService) {}
  cows: any[] = [];
  filteredCows: any[] = [];
  field: string = '';
  sortAsc: boolean = true;
  dataLoaded: boolean = false;

  ngOnInit(): void {
    this._cowsService.getAllCows().subscribe(
      (res) => {
        this.cows = res;
        this.filteredCows = this.cows;
        this.dataLoaded = true;
        // console.log(
        //   this.cows[0].last_milk_time.slice(0, 10).replace(/-/g, '/')
        // );
      },
      (err) => {
        console.log(err);
        this.dataLoaded = true;
      }
    );
  }

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filteredCows = this.cows.filter(
      (cow) => cow.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  onSort(field: string): void {
    let fieldAsKey = field as keyof ICow;
    this.field = field;

    // refactored with array average for 'importance' field sorting:
    if (this.sortAsc) {
      this.filteredCows.sort((a, b) => {
        return a[fieldAsKey] < b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    } else {
      this.filteredCows.sort((a, b) => {
        if (field === 'importance') {
          return a.getAverageRating() > b.getAverageRating() ? -1 : 0;
        } else {
          return a[fieldAsKey] > b[fieldAsKey] ? -1 : 0;
        }
      });
      this.sortAsc = !this.sortAsc;
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
