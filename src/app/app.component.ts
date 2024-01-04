import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SplitButtonModule, ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplitButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public items: ItemModel[] = [ { text: "Paste"}, { text: "Paste Special", disabled: true},
  { text: "Paste as Formula" }, { text: "Paste as Hyperlink" }];
}
