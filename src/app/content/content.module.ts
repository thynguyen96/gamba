import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { GuardContentGuard } from './guard-content.guard';
import { HomeComponent } from './home/home.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TestComponent } from './test/test.component';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyAccountDetailComponent } from './my-account-detail/my-account-detail.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ContentRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ShopComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    TestComponent,
    ShopDetailComponent,
    MyAccountComponent,
    MyAccountDetailComponent,
    AboutComponent,
    BlogDetailComponent,
    CheckOutComponent,
    ShoppingCartComponent
  ],
  providers: [GuardContentGuard],
  exports : [ShopComponent]
})
export class ContentModule { }
