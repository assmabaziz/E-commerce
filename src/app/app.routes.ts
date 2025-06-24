import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'public',
        loadChildren: ()=> import('./Public/public.module').then(m=>m.PublicModule)
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/public'
    }
];
