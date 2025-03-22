import { Component, OnInit } from '@angular/core';
import { AnimalsadminService } from 'src/app/services/animalsadmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  animals: any = [];
  pets: any = [];
  types: any = [];
  genders: any = [];
  sizes: any = [];
  loading: boolean = true;

  newAnimal = {
    name: '',
    type_id: '',
    size_id: '',
    gender_id: '',
    date_of_birth: '',
    date_of_admission: '',
    description: '',
    adopted: false,
    image: ''
  };

  constructor(private animalsService: AnimalsadminService) {}

  ngOnInit(): void {
    this.loadAnimals();
    this.loadDropdownData();
  }

  loadAnimals(): void {
    this.animalsService.getAnimals().subscribe(response => {
      this.animals = response; 
    });
  }

  loadDropdownData(): void {
    this.animalsService.getTypes().subscribe(response => {
      this.types = response.data;
    });
    this.animalsService.getGenders().subscribe(response => {
      this.genders = response.data;
    });
    this.animalsService.getSizes().subscribe(response => {
      this.sizes = response.data;
    });
    this.loading = false;
  }

  onSubmit(): void {
    if (this.newAnimal.name && this.newAnimal.type_id) {
      this.animalsService.addAnimal(this.newAnimal).subscribe(response => {
        console.log('Új állat hozzáadva:', response);
        this.loadAnimals();
        this.resetForm();
      });
    }
  }

  updateAnimal(animal: any): void {
    this.animalsService.updateAnimal(animal).subscribe(response => {
      console.log('Állat módosítva:', response);
      this.loadAnimals();
    });
  }

  deleteAnimal(animalId: number): void {
    this.animalsService.deleteAnimal(animalId).subscribe(response => {
      console.log(`Állat törölve: ID ${animalId}`);
      this.loadAnimals();
    });
  }

  resetForm(): void {
    this.newAnimal = {
      name: '',
      type_id: '',
      size_id: '',
      gender_id: '',
      date_of_birth: '',
      date_of_admission: '',
      description: '',
      adopted: false,
      image: ''
    };
  }
}
