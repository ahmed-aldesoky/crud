import { MatrialModule } from './../../../../shared/matrial/matrial.module';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@shared/matrial/matrial.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {

  addRecordForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.createForm()
  }


  createForm() {
    this.addRecordForm = this.fb.group({
      id: [''],
      name: [''],
      englishName: [''],
      entityTypeName: [''],
      countryName: [''],
      isActive: [true]
    })
  }
  get f() {
    return this.addRecordForm.controls;
  }

  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
