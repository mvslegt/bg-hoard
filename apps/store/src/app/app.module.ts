import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { StoreSharedUiModule } from '@bg-hoard/store/shared-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id', // <---- HERE
          loadChildren: () =>
            import('@bg-hoard/store/feature-game-detail').then(
              (m) => m.StoreFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    MatCardModule,
    StoreSharedUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
