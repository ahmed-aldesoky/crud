import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@app/layout/footer/footer.component';
import { HeaderComponent } from '@app/layout/header/header.component';
@Component({
  selector: 'app-content-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './content-layout.component.html',
  styleUrl: './content-layout.component.scss'
})
export class ContentLayoutComponent {

}
