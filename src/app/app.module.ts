import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirDirective } from './shared/my-dir.directive';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import * as Const from './shared/constants';
import { ColorPreviewerComponent } from './color-previewer/color-previewer.component';
import { ColorInputComponent } from './color-input/color-input.component';
import { CollapseDirective } from './shared/collapse.directive';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyDirDirective,
    SearchBoxComponent,
    ColorPickerComponent,
    ColorPreviewerComponent,
    ColorInputComponent,
    CollapseDirective,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
