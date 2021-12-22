import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/security/login/login.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
];

export const routes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(ROUTES);