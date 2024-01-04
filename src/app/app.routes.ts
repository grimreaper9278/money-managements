import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import("./auth/auth.routes").then((m)=> m.AuthRoutes)
    },
    {
        path: "management",
        loadChildren: () => import("./management/management.routes").then((m)=> m.ManagementRoutes)
    }
];
