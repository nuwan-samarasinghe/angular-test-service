import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TestServiceComponent} from './test-get-service/test-service.component';
import {HttpModule} from '@angular/http';
import {TestPostServiceComponent} from './test-post-service/test-post-service.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestServiceComponent,
    TestPostServiceComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
