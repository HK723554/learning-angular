import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponentComponent } from './content-list-component/content-list-component.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { HoverStyleDirective } from './directives/hover-style.directive';
import { CreateContentComponent } from './create-content/create-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { CreateContentDialogComponent } from './create-content-dialog/create-content-dialog.component';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponentComponent,
    TypeFilterPipe,
    HoverStyleDirective,
    CreateContentComponent,
    CreateContentDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateContentDialogComponent]
})
export class AppModule { }
