import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CowsComponent } from './components/cows/cows.component';
import { FooterComponent } from './components/footer/footer.component';
import { CowComponent } from './components/cow/cow.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CowsComponent,
    FooterComponent,
    CowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CowsComponent },
      { path: 'cows', component: CowsComponent },
      { path: 'add', component: CowComponent },
      { path: '**', redirectTo: 'cows', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
