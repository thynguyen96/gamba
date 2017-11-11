import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ContentComponent } from './content.component';
import { RegisterComponent } from './register/register.component';
import { GuardContentGuard } from './guard-content.guard';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import {MyAccountComponent } from './my-account/my-account.component';
import {MyAccountDetailComponent } from './my-account-detail/my-account-detail.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'shop', component: ShopComponent
      },
      {
        path: 'blog', component: BlogComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'contact', component: ContactComponent,
        canActivate: [GuardContentGuard]
      },
      {
        path: 'shop-detail', component: ShopDetailComponent
      },
      {
        path: 'my-account', component: MyAccountComponent
      },
      {
        path: 'my-account-detail', component: MyAccountDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
