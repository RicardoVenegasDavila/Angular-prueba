import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
ContactComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,

   
  ],
  exports: [
    ContactComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule
  ]
})

export class PagesModule { }
