import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorModule } from './service/header-interceptor.service';
import { UsuarioComponent } from './componente/usuario/usuario.component';


export const appRouters: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: UsuarioComponent }
];

export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    LoginComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routes,
    HttpInterceptorModule
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
