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
import { CowsFarmComponent } from './components/cows-farm/cows-farm.component';
import { OneCowComponent } from './components/one-cow/one-cow.component';
import { AllCowsComponent } from './components/all-cows/all-cows.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CowsComponent,
    FooterComponent,
    CowComponent,
    CowsFarmComponent,
    OneCowComponent,
    AllCowsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CowsFarmComponent },
      { path: 'cows', component: CowsComponent },
      { path: 'cows/:id', component: CowComponent },
      { path: 'add', component: CowComponent },
      { path: 'one', component: AllCowsComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
