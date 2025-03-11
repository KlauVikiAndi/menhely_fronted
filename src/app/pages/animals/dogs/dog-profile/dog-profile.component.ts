import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrl: './dog-profile.component.css'
})
export class DogProfileComponent implements OnInit {
  dogId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.dogId = this.route.snapshot.paramMap.get('id');
    console.log('Kutya ID:', this.dogId);
    // Később itt kell betölteni az adatokat az adatbázisból
  }
}
