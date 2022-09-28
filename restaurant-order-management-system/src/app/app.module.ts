import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
 import { AngularFireModule } from "@angular/fire";
 import { FirestoreModule, provideFirestore,getFirestore } from "@angular/fire/firestore";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { HeaderImageComponent } from './home/header-image/header-image.component';
import { CartComponent } from './cart/cart.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { CartIconComponent } from './global/cart-icon/cart-icon.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { DessertsIconComponent } from './global/desserts-icon/desserts-icon.component';
import { DrinksIconComponent } from './global/drinks-icon/drinks-icon.component';
import { FooterComponent } from './global/footer/footer.component';
import { LoaderComponent } from './global/loader/loader.component';
import { MainsIconComponent } from './global/mains-icon/mains-icon.component';
import { NavbarComponent } from './global/navbar/navbar.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { StartersIconComponent } from './global/starters-icon/starters-icon.component';
import { AdminComponent } from './admin/admin.component';
import { AddOrEditItemsComponent } from './admin/add-or-edit-items/add-or-edit-items.component';
import { DisplayItemsComponent } from './admin/display-items/display-items.component';
import { DisplayOrdersComponent } from './admin/display-orders/display-orders.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    HeaderImageComponent,
    CartComponent,
    OrderPageComponent,
    UserProfileComponent,
    CartPageComponent,
    CategoryPageComponent,
    ConfirmOrderComponent,
    CartIconComponent,
    DessertsIconComponent,
    DrinksIconComponent,
    FooterComponent,
    LoaderComponent,
    MainsIconComponent,
    NavbarComponent,
    NotFoundComponent,
    StartersIconComponent,
    AdminComponent,
    AddOrEditItemsComponent,
    DisplayItemsComponent,
    DisplayOrdersComponent,
    ManageOrdersComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
