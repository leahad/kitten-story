import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  kittenForm = this.fb.group({
    name: ['',Validators.required],
    breed: ['',Validators.required],
    birthdate: [new Date(),Validators.required],
    picture: [''],
  });

  constructor(private fb: FormBuilder) {}

  @Output()
  kittens: EventEmitter<Kitten> = new EventEmitter();

  onSubmit() {
    // get value from the form
    const kitten: Kitten = this.kittenForm.value as Kitten;
    // send value to the list-kitten component
    this.kittens.emit(kitten);

    this.kittenForm.reset();
  }
}
