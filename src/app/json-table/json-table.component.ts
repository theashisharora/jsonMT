import { Component, Input } from '@angular/core';
import { Program, Courses } from '../interfaceCP';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css'
})
export class JsonTableComponent {
  @Input() program!: Program;
  @Input() courses!: Courses[];
}
