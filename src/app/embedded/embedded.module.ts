import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Services used by embedded components
import { CopierService } from 'app/shared/copier.service';
import { FortuneCookieService } from './fortune-cookie/fortune-cookie.service';
import { PrettyPrinter } from './code/pretty-printer.service';

// Any components used inside embedded components
// must be declared or imported here.
// It is not enough just to import them inside the AppModule

// Reusable components (used inside embedded components)
import { MatSnackBarModule, MatTabsModule } from '@angular/material';
import { CodeComponent } from './code/code.component';

// Embedded component imports
import { AwesomeComponent } from './awesome/awesome.component';
import { CodeExampleComponent } from './code/code-example.component';
import { CodeTabsComponent } from './code/code-tabs.component';
import { CurrentLocationComponent } from './current-location/current-location.component';
import { FortuneCookieComponent } from './fortune-cookie/fortune-cookie.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

/** Components that can be embedded in docs such as CodeExampleComponent */
export const embeddedComponents: any[] = [
  AwesomeComponent,
  CodeExampleComponent,
  CodeTabsComponent,
  CurrentLocationComponent,
  FortuneCookieComponent,
  HeroFormComponent,
];

/** Injectable class w/ property returning components that can be embedded in docs */
export class EmbeddedComponents {
  components = embeddedComponents;
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  declarations: [
    embeddedComponents,
    // non-embedded components that are used by embedded components
    CodeComponent
  ],
  providers: [
    EmbeddedComponents,
    // services needed for embedded components
    CopierService,
    FortuneCookieService,
    PrettyPrinter
  ],
  entryComponents: [ embeddedComponents ]
})
export class EmbeddedModule { }
