import { CowsService } from './../../services/cows.service';
import { Component, OnInit } from '@angular/core';
import { ICow } from 'src/app/models/Cow';

@Component({
  selector: 'app-cows',
  templateUrl: './cows.component.html',
  styleUrls: ['./cows.component.css'],
})
export class CowsComponent implements OnInit {
  constructor(private _cowsService: CowsService) {}
  cows: ICow[] = [];
  filteredCows: ICow[] = [];
  field: string = '';
  sortAsc: boolean = true;
  dataLoaded: boolean = false;

  ngOnInit() {
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

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filteredCows = this.cows.filter(
      (cow) => cow.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  onSort(field: string): void {
    let fieldAsKey = field as keyof ICow;
    this.field = field;
    if (this.sortAsc) {
      this.filteredCows.sort((a, b) => {
        return a[fieldAsKey] < b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    } else {
      this.filteredCows.sort((a, b) => {
        return a[fieldAsKey] > b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    }
  }

  onDelete(id: number): void {
    this._cowsService.deleteCow(id).subscribe(
      (res) => {
        alert(
          `Cow ${
            this.cows.find((c) => c.id == id)?.name
          } successfuly deleted from DB!`
        );
        this.cows = this.cows.filter((cow) => cow.id !== id);
        this.filteredCows = this.cows;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
