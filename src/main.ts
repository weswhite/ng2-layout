import { bootstrap } from '@angular/platform-browser-dynamic';
import { ParentComponent } from './app/parent/parent.component';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(ParentComponent, [HTTP_PROVIDERS]);

