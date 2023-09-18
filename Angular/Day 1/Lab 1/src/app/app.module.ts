import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { RepeatingInputComponent } from './Components/repeating-input/repeating-input.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FeaturesComponent } from './Components/features/features.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, CarouselComponent, RepeatingInputComponent, FooterComponent, FeaturesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
