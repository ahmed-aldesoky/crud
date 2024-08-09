import { Component } from '@angular/core';
import { TableComponent } from '@shared/table/table.component';

@Component({
  selector: 'app-home-index',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home-index.component.html',
  styleUrl: './home-index.component.scss'
})
export class HomeIndexComponent {

  items: any[] = [
    {
      id: "996e303d-16b9-4f87-518e-08dcb5efe62a",
      name: "sadsadas",
      englishName: "sadsadasds",
      entityTypeName: "اختصاص خارجية",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "49aade22-81c1-4191-518f-08dcb5efe62a",
      name: "sadsawewweew",
      englishName: "ewewewewew",
      entityTypeName: "اختصاص داخلية",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "506ded51-fc2f-4c36-518d-08dcb5efe62a",
      name: "اسم الجهة باللغة العربية",
      englishName: "cvbcbcbv",
      entityTypeName: "دائمة",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "41f394c2-ed70-41bd-ae1a-fb812ef5042d",
      name: "جهة جديدة تيست",
      englishName: "جهة جديدة تيست",
      entityTypeName: "دائمة",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "3301f9db-6f5a-4563-9685-6afdc5a7bb5e",
      name: "جهة حكومية",
      englishName: "governmental Entity",
      entityTypeName: "اختصاص داخلية",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "0ef7b60e-d286-45ee-f1e9-08dcb61325be",
      name: "جهة خاصة ",
      englishName: "SPECIAL ",
      entityTypeName: "دائمة",
      countryName: "المملكة العربية السعودية",
      isActive: true
    },
    {
      id: "3ac6e699-84d6-4d70-971a-2269fe7903e2",
      name: "هيئة العمران السعودي",
      englishName: "  Communities Authority",
      entityTypeName: "اختصاص داخلية",
      countryName: "المملكة العربية السعودية",
      isActive: true
    }
  ]

  coulmns = [
    {
      title: "name",
      key: "name"
    },
    {
      title: "englishName",
      key: "englishName"
    },
    {
      title: "entityTypeName",
      key: "entityTypeName"
    },
    {
      title: "countryName",
      key: "countryName"
    },
  ]

  reset() {
    this.items = []
  }
}


