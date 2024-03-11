import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { RegisterComponent } from './page/register/register.component';
import { ViewAllBurrowersComponent } from './page/view-all-burrowers/view-all-burrowers.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { AddBooksComponent } from './page/add-books/add-books.component';
import { BurrowBookComponent } from './page/burrow-book/burrow-book.component';

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
    ,
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    }
    ,
    {
        path:"home",
        component : DashboardComponent
    }
    ,
    {
        path:"addbook",
        component :AddBooksComponent
    }
    ,
    {
        path:"burrowbook",
        component : BurrowBookComponent
    }
];
