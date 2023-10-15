import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LiveApiComponent } from './live-api/live-api.component';
// import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { CompComponent } from './comp/comp.component';
// import { WeatherComponent } from './weather/weather.component';
// import { TemplateformComponent } from './templateform/templateform.component';
import { SbookComponent } from './sbook/sbook.component';
import { PostpageComponent } from './postpage/postpage.component';

@NgModule({
  declarations: [
    AppComponent,
    // LiveApiComponent,
    // ReactiveFormComponent,
    // CompComponent,
    // WeatherComponent,
    // TemplateformComponent,
    SbookComponent,
    PostpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
