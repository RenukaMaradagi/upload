import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
//import { FilesizePage} from '../filesize/filesize.page'
import { HomePageRoutingModule } from './home-routing.module';

import { FileSizePipe } from '../file-size.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
   // FilesizePage

  ],
  declarations: [HomePage,FileSizePipe]
})
export class HomePageModule {}
