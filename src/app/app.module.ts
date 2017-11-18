import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { NavserviceService } from './navservice.service';
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { ProductService } from './product.service';
import { MatTabsModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { BannerComponent } from './banner/banner.component';
import { DropdownModule } from "ngx-dropdown";
import { AdminComponent } from './admin/admin.component';
import { MatSliderModule, MatDialog, MatDialogModule } from '@angular/material';

import { LoginComponent } from './admin/login/login.component';
import { ProcessOrderComponent } from './process-order/process-order.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { httpFactory } from './services/http.factory';
import { OrderService } from './services/order.service';
import { HttpService } from './services/http.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginRouteGuard } from './login-route.guard';
import { LoginService } from './services/login.service';
import { ProductsComponent } from './admin/dashboard/products/products.component';
import { CategoriesComponent } from './admin/dashboard/categories/categories.component';
import { CreateProductComponent } from './admin/dashboard/products/create-product/create-product.component';
import {MatSelectModule} from '@angular/material';
import { CreateCategoryComponent } from './admin/dashboard/categories/create-category/create-category.component';

const appRoutes: Routes = [{ path: 'login', component: LoginComponent },
{
  path: 'dashboard', component: DashboardComponent, canActivate: [LoginRouteGuard],
  children: [{ path: '', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }]
},
{
  path: '', component: MainComponent, children: [
    { path: '', component: ContentContainerComponent, outlet: "main" }
  ]
}


];

export const appRoutingProviders: any[] = [];

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
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    CreateProductComponent,
    CreateCategoryComponent,
  ],
  entryComponents: [
    ProcessOrderComponent,CreateProductComponent,CreateCategoryComponent
  ],
  imports: [DropdownModule, StarRatingModule.forRoot(), RouterModule.forRoot(
    appRoutes
  ),
    ReactiveFormsModule, FormsModule, MatDialogModule, MatSliderModule, BrowserModule, MatButtonModule, MatCheckboxModule,
    MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, MatIconModule,
    MatListModule, MatCardModule, MatInputModule, MatTabsModule, MatGridListModule,
    MatTableModule, HttpModule,MatSelectModule
  ],
  providers: [{
    provide: HttpService,
    useFactory: httpFactory,
    deps: [XHRBackend, RequestOptions]
  }, NavserviceService, ProductService, OrderService, LoginRouteGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
