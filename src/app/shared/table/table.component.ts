import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor() {
  }


  columns = input.required<{
    title: string;
    key: string;
    icon?: { type: string; link: string; class: string }[];
    specialClass?: string
  }[]>();
  rows = input.required<any[]>();
  totalItems = input<number>(0)
  linkPath = input<string>('')
  showSerialNumber = input<boolean>(true)
  showImgUrl = input<boolean>(false)
  imageDetails = input<any>()
  editIcon = input<boolean>(true)
  deleteIcon = input<boolean>(true)
  noDataText = input<string>('')
  hasDetails = input<boolean>(true)
  isTableScrolled = false;
  isAcceptDelete: boolean = false;
  // Pagination properties
  currentPage = input<number>(1)
  itemsPerPage = input<number>(5)
  sortedColumn: string | null = null;
  sortDirection: number = 1;
  // editModal properties
  editModalTitle = input<string>('')
  // deleteModal properties
  deleteModalTitle = input<string>('')
  deleteModalBtnTxt = input<string>('')
  item: any;
  openEditSidebar: boolean = false;
  lastPageActive: boolean = false;
  colName = input<string>('')
  downloadIcon = input<boolean>(false)
  pageChange = output<number>()
  isEditOpen = output<number>()

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.rows());

  }
}
