import { Routes } from '@angular/router';
import { Punto1 } from './components/public/punto1/punto1';
import { Punto2 } from './components/public/punto2/punto2';
import { Punto3 } from './components/public/punto3/punto3';
import { Punto4 } from './components/public/punto4/punto4';

export const routes: Routes = [
     {
        path: "punto1",
        component: Punto1
    },
    {
        path: "punto2",
        component: Punto2
    },
    {
        path: "punto3",
        component: Punto3
    },
    {
        path: "punto4",
        component: Punto4
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "punto1"
    }
];
