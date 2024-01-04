import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [
    {
        path: "register",
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    }
];
