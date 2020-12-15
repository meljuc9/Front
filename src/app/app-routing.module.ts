import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';
import { SendEmailComponent } from '@auth/send-email/send-email.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosAddComponent } from './usuarios/usuarios-add/usuarios-add.component';
import { PersonasComponent } from './trabajadores/personas.component';
import { PersonasAddComponent } from './trabajadores/personas-add/personas-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'trabajadores',
          children: [
            { path: '',
              component: PersonasComponent
            },
            { path: 'add',
              component: PersonasAddComponent,
            }
          ]
      },
      { path: 'usuarios',
        children: [
          { path: '',
            component: UsuariosComponent,
          },
          {
              path: 'add',
              component: UsuariosAddComponent,
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routedComponents: any[] = [
    MainComponent,
];
