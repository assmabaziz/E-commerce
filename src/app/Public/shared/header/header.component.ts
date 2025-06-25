import { Component } from '@angular/core';
import { MegaMenuComponent } from "./mega-menu/mega-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MegaMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showMenu : boolean = false

toggleMenu(change: boolean): void {
this.showMenu = change
}
}
