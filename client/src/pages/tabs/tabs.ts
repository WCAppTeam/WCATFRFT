import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { GridPage } from '../grid/grid';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = SignupPage;
  tab3Root = GridPage;

  constructor() {

  }
}
