import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MfaComponent } from './mfa/mfa.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mfa', component: MfaComponent },
    { path: 'settings', component: SettingsComponent },
];
