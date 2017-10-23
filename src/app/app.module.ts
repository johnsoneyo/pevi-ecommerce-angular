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


const appRoutes: Routes = [
  { path: '', component: ContentContainerComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentContainerComponent,
    SidebarComponent,
    ContentComponent,
   ],
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,MatButtonModule,MatCheckboxModule,
    MatToolbarModule,MatSidenavModule,BrowserAnimationsModule,MatIconModule,
    MatListModule,MatCardModule,MatInputModule,MatTabsModule,MatGridListModule,
    MatTableModule
  ],
  providers: [NavserviceService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
