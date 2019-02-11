import { LandingRoutingModule } from './landing-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class LandingModule { }
