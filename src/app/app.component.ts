import { Component, OnInit } from '@angular/core';
import { SitesService } from './services/sites.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portal';
  categories;
  constructor(private service: SitesService) {}

  ngOnInit() {
    this.service.getCategories().subscribe((_result) => {
      this.categories = _result;
    });
  }
}
