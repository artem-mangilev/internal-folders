import { Component } from '@angular/core';

import { PublicComponent } from '../libs/my-lib';
import { PrivateComponent } from '../libs/my-lib/internal/components/private-component/private-component.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internal-folders';

}
