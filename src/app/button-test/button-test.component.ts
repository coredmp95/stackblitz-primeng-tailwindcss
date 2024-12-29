import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-button-test',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    DatePickerModule,
    SelectModule,
    DialogModule,
  ],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss',
})
export class ButtonTestComponent {
  selectedCountry: any;
  countries: any[] = [
    'France',
    'Germany',
    'Italy',
    'Spain',
    'United Kingdom',
    'United States',
  ];

  visible = false;

  closeDialog() {
    console.log('close dialog');
    this.visible = false;
  }

  showDialog() {
    console.log('show dialog');
    this.visible = true;
  }
}
