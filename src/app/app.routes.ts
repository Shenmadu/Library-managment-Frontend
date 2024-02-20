import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllBurrowersComponent } from './page/view-all-burrowers/view-all-burrowers.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    }
    ,
    {
        path:"viewallbooks",
        component:ViewAllBooksComponent   
    }
    ,
    {
        path:"signup",
        component:RegisterComponent
    }
    ,
    {
        path:"viewallburrowers",
        component : ViewAllBurrowersComponent
    }
];
