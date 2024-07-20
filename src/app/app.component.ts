import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud';


  ourFirstSignals = signal<number>(0)

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    initFlowbite();


    this.ourFirstSignals.set(8)
    console.log(this.ourFirstSignals());
    this.ourFirstSignals.update((val) => val + 2)
    console.log(this.ourFirstSignals());


  }
}
