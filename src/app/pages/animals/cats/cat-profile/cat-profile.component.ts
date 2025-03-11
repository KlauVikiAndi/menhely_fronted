import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-profile',
  templateUrl: './cat-profile.component.html',
  styleUrls: ['./cat-profile.component.css']
})
export class CatProfileComponent implements OnInit {
  catId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.catId = this.route.snapshot.paramMap.get('id');
    console.log('Macska ID:', this.catId);
    // Később itt kell betölteni az adatokat az adatbázisból
  }
}
