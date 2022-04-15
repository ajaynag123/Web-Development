import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchField: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.searchField);
  }

}
