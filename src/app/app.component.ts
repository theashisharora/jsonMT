import { Component } from '@angular/core';
import { Program, Courses } from './interfaceCP';
import cpdata from '../../public/data/cp.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jsonMT';
}
