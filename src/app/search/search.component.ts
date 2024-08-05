import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  filteredItems: any;
  items: any;
  constructor(public ItemService: ItemsService) {}
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.ItemService.getitems().then((data) => {
      this.items = data;
      this.filteredItems = this.items;
    });
  }
}
