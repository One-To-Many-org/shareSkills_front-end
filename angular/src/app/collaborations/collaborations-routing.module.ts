import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollaborationsComponent } from './collaborations.component';

const routes: Routes = [{ path: '', component: CollaborationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborationsRoutingModule { }
