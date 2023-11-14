import {Component, EventEmitter, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnChanges{
  @Output() searchChanged = new EventEmitter();
  searchTerm = ""
  onChange(term: any){
    this.searchChanged.emit(term);

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
