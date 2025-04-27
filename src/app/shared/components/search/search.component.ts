import {Component, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
})
export class SearchComponent {
  searchForm = new FormGroup({
    searchQuery: new FormControl('', [Validators.required]),
  });
  queryChanged = output<string | undefined | null>();
  searchSubmitted = output<string | undefined | null>();

  onChange(): void {
    this.queryChanged.emit(this.searchForm.value.searchQuery);
  }

  onSubmit(): void {
    this.searchSubmitted.emit(this.searchForm.value.searchQuery);
  }
}
