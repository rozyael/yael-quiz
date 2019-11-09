import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { PageComponent } from './components/page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionComponent } from './components/page/option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PageComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
