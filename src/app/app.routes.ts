import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'public',
        loadChildren: ()=> import('./Public/public.module').then(m=>m.PublicModule)
    },
    {
        path:'login',
        loadComponent:()=> import ('./Acount/login/login.component').then(c=>c.LoginComponent),
        title:'Login'
    },
    {
        path:'register',
        loadComponent:()=> import ('./Acount/register/register.component').then(c=>c.RegisterComponent),
        title:'Register'
    },
    {
        path:'forgot-password',
        loadComponent:()=> import ('./Acount/forgot-password/forgot-password.component').then(c=>c.ForgotPasswordComponent),
        title:'Forgot pasword'
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/public'
    }
];
