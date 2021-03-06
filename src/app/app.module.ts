import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { EditnoteComponent } from './editnote/editnote.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [AppComponent, EditnoteComponent, FrontpageComponent, AdduserComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
