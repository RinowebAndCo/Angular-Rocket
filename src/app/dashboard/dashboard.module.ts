import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';


@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, DashboardRoutingModule,BrowserAnimationsModule,MaterialModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
 