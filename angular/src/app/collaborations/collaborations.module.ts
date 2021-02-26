import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborationsRoutingModule } from './collaborations-routing.module';
import { CollaborationsComponent } from './collaborations.component';
import { CommunityComponent } from './community/community.component';
import { ChatsComponent } from './chats/chats.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [CollaborationsComponent, CommunityComponent, ChatsComponent, JobsComponent],
  imports: [
    CommonModule,
    CollaborationsRoutingModule
  ]
})
export class CollaborationsModule { }
