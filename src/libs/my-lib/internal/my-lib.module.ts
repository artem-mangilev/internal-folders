import { NgModule } from '@angular/core';
import { PrivateComponent } from './components/private-component/private-component.component';
import { PublicComponent } from './components/public-component/public-component.component';

@NgModule({
  imports: [],
  exports: [
    PublicComponent
  ],
  declarations: [
    PrivateComponent,
    PublicComponent
  ],
  providers: [],
})
export class MyLibModule { }
