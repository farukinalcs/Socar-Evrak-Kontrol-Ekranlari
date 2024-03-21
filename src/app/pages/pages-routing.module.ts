import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';
import { BoardComponent } from '../socar/board/board.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    // canActivate: [ProcessGuard],
    children: [
      {
        path: "homepage", // <= Page URL     
        component: BoardComponent, // <= Page component registration
        //  canActivate: [ProcessGuard],
      },
      // {
      //   path:"turnike",
      //   component:SocarComponent,
      // },
      // {
      //   path:"turnike2",
      //   component:Socar2Component,
      // },
      {
        path: "",
        redirectTo: "homepage",
        pathMatch: "full",
      },
      // {
      //   path: "**",
      //   redirectTo: "Profile/Dashboard",
      //   component: AccessDeviceReaderComponent 
      // },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule { }
