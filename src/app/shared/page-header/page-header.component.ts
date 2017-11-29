import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Output() onExpand = new EventEmitter();

  handleExpandClick() {
    this.onExpand.emit();
  }
}
