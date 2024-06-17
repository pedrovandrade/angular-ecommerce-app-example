import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { authGuard } from './services/auth/auth.guard'
import { loggedOutGuard } from './services/auth/logged-out.guard'
import { ProductsComponent } from './pages/products/products.component'
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [loggedOutGuard] },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'products', component: ProductsComponent, canActivate: [authGuard] },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [authGuard] },
]
