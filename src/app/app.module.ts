import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import {MatToolbarModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {MatSidenavModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { NavserviceService } from './navservice.service';
import {MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ProductService } from './product.service';
import {MatTabsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { BannerComponent } from './banner/banner.component';
import {DropdownModule} from "ngx-dropdown";
import { AdminComponent } from './admin/admin.component';
import {MatSliderModule, MatDialog, MatDialogModule} from '@angular/material';

import { LoginComponent } from './admin/login/login.component';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [{path : 'login',component:LoginComponent},
 
    {path: '',component: MainComponent,children :[
      {path:'',component: ContentContainerComponent,outlet:"main"}
    ]}
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentContainerComponent,
    SidebarComponent,
    ContentComponent,
    BannerComponent,
    AdminComponent,
    LoginComponent,
    ProcessOrderComponent,
    MainComponent,
   ],
     entryComponents: [
    ProcessOrderComponent
  ],
  imports: [ DropdownModule, StarRatingModule.forRoot(), RouterModule.forRoot(
    appRoutes
  ),
    ReactiveFormsModule,FormsModule,MatDialogModule,MatSliderModule,BrowserModule,MatButtonModule,MatCheckboxModule,
    MatToolbarModule,MatSidenavModule,BrowserAnimationsModule,MatIconModule,
    MatListModule,MatCardModule,MatInputModule,MatTabsModule,MatGridListModule,
    MatTableModule
  ],
  providers: [NavserviceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
