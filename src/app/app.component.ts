import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ItemModel, DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DropDownButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public items: ItemModel[] = [ { text: "Edit" }, { text: "Delete", disabled: true }, { text: "Mark as Read" },
 { text: "Like" }, { text: "Share", url: "https://twitter.com" } ];
}
