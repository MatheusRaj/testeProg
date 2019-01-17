import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServicosProvider } from '../providers/servicos/servicos';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyAM765RRLxnUDUTVLPN_aD6VTG9xgT_XDk",
  authDomain: "testeprog-afc9e.firebaseapp.com",
  databaseURL: "https://testeprog-afc9e.firebaseio.com",
  projectId: "testeprog-afc9e",
  storageBucket: "testeprog-afc9e.appspot.com",
  messagingSenderId: "1053031334849"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicosProvider
  ]
})
export class AppModule {}
