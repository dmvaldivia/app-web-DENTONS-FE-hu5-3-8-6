import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { LogoutComponent } from './access/login/logout.component';
import { ProjectIndexComponent } from './access/project/project-index/project-index.component';
import { ProjectNewComponent } from './access/project/project-new/project-new.component';
import { UserNewComponent } from './access/user-new/user-new.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ApartmentComponent } from './pages/apartment/apartment.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'user-new', component: UserNewComponent },
    { path: 'project/:id', component: ProjectComponent },
    { path: 'apartment/:id', component: ApartmentComponent},
    { path: 'busqueda', component: BusquedaComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'admin/project/new', component: ProjectNewComponent },
    { path: 'admin/project/index', component: ProjectIndexComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}