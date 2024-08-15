import { MatrialModule } from './../../../../shared/matrial/matrial.module';
import { Component, input, output } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@shared/matrial/matrial.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CountryData, EntityData } from '@app/shared/data/lookupsData';
interface item {
  id: string,
  name: string,
  englishName: string,
  entityTypeName: string,
  countryName: string,
  isActive: boolean

}
@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})


export class AddComponent {

  currentValue = input<item>()
  sendData = output<item>()

  addRecordForm!: FormGroup;
  entityTypeList: string[] = []
  countyList: any[] = CountryData
  entityList: any[] = EntityData


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

  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  submit() {
    const data = {
      id: this.newGuid(),
      name: this.f['name'].value,
      englishName: this.f['englishName'].value,
      entityTypeName: this.f['entityTypeName'].value,
      countryName: this.f['countryName'].value,
      isActive: this.f['isActive'].value,
    }
    this.sendData.emit(data)
  }

  fetchEditData(data: item) {
    this.addRecordForm.patchValue({
      id: data.id,
      name: data.name,
      englishName: data.englishName,
      entityTypeName: data.entityTypeName,
      countryName: data.countryName,
      isActive: data.isActive

    })
  }
}
