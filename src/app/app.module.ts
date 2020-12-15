/*Modules*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
/*Components */
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { MainComponent } from './main/main.component';
import { UsuariosComponent } from './profesionales/usuarios.component';
import { UsuariosAddComponent } from './profesionales/usuarios-add/usuarios-add.component';
import { DataService } from './dataservice/data.service';
import { PersonasComponent } from './trabajadores/personas.component';
import { PersonasAddComponent } from './trabajadores/personas-add/personas-add.component';

import { environment } from '../environments/environment';
import { AuthService } from '@auth/services/auth.service';
import { CanSuscriptorGuard } from '@app/auth/guards/can-suscriptor.guard';
import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';

/*STORE NGRX */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    SendEmailComponent,
    AppComponent,
    MainComponent,
    routedComponents,
    UsuariosComponent,
    UsuariosAddComponent,
    PersonasComponent,
    PersonasAddComponent
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    CovalentLayoutModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule, 
    BrowserAnimationsModule,   
    BrowserModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    AuthService,
    CanEditGuard,
    CanAdminGuard,
    CanSuscriptorGuard,
    DataService,
    { provide: BUCKET, useValue: 'gs://crud-7e0a7.appspot.com' },
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}