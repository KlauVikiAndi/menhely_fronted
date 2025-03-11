import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../../../services/cats.service';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats: any[] = [];

  constructor(private catsService: CatsService, private router: Router) {}

  ngOnInit(): void {
    this.catsService.getCats().subscribe(cats => {
      console.log(cats); // Ellenőrizd, hogy valóban egy tömb érkezik
      this.cats = cats;
    });
  }
  

  goToProfile(catId: number) {
    this.router.navigate(['/animals/cats', catId]);
  }
}
