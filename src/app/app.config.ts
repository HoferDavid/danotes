import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({projectId: 'danotes-c9be4', appId: '1:818466774836:web:9278ee1aca3983314ecf61', storageBucket: 'danotes-c9be4.appspot.com', apiKey: 'AIzaSyBdZT4fu_PLlEHzO1_9J2ANxeGlPTVAUms', authDomain: 'danotes-c9be4.firebaseapp.com', messagingSenderId: '818466774836' })),
    provideFirestore(() => getFirestore())]
};


// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter(routes),
//     provideFirebaseApp(() =>
//       initializeApp({
//         projectId: 'danotes-c9be4',
//         appId: '1:818466774836:web:9278ee1aca3983314ecf61',
//         storageBucket: 'danotes-c9be4.appspot.com',
//         apiKey: 'AIzaSyBdZT4fu_PLlEHzO1_9J2ANxeGlPTVAUms',
//         authDomain: 'danotes-c9be4.firebaseapp.com',
//         messagingSenderId: '818466774836',
//       })
//     ),
//     provideFirestore(() => getFirestore()),
//   ],
// };
