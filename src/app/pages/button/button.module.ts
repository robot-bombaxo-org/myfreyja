import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { ContentComponent } from './content/content.component';
import {SubNavModule} from '../../layout/sub-nav/sub-nav.module';
import {ContentWrapModule} from '../../components/content-wrap/content-wrap.module';
import {FjButtonModule, FjAccordionModule} from '../../../environments/environment';
import {HighlightModule} from 'ngx-highlightjs';
import {TextHelper} from '../../shared/helpers/text.helper';

@NgModule({
  imports: [
    CommonModule,
    SubNavModule,
    ContentWrapModule,
    FjButtonModule,
    FjAccordionModule,
    HighlightModule.forRoot({ theme: 'arduino-light'})
  ],
  providers: [TextHelper],
  declarations: [ButtonComponent, ContentComponent],
  exports: [ButtonComponent]
})
export class ButtonModule { }
