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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CowsComponent,
    FooterComponent,
    CowComponent,
    CowsFarmComponent,
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
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
