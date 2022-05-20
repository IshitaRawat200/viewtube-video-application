import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
//import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormFieldDefaultOptions,MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialComponents=[FormsModule,ReactiveFormsModule, MatOptionModule,MatSelectModule,MatToolbarModule,MatNativeDateModule,MatDatepickerModule,MatRadioModule, MatIconModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatChipsModule,MatInputModule,MatButtonModule]
const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    MaterialComponents
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  exports: [MaterialComponents]
})
export class MaterialModule { }
