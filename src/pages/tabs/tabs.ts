import { Component } from '@angular/core';
import { CartPage } from '../cart/cart';
import { AccountPage } from '../account/account';
import { AboutPage } from '../about/about';
import { SubcategoryPage } from '../subcategory/subcategory';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SubcategoryPage;
  tab2Root: any = CartPage;
  tab3Root: any = AccountPage;
  tab4Root: any = AboutPage;

  constructor() { }
}
