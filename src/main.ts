import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { registerLicense } from '@syncfusion/ej2-base';
 
registerLicense('ORg4AjUWIQA/Gnt2VlhiQlZPd0BDXXxLflFyVWJbdV1yflFFcC0sT3RfQF5iS39XdkFiUX5fcHxcRA==');

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
