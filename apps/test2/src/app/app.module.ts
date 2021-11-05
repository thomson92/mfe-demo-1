/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ExposedModule } from './exposed/exposed.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
      },
      // {
      //   path: 'qwe',
      //   loadChildren: () => import('./exposed/exposed.module').then(m => m.ExposedModule)
      // }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
