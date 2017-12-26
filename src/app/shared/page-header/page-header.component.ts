import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  @Output() onExpand = new EventEmitter();

  @ViewChild('volumeTemplate') volumeTemplate;
  dummyName = '管理员名称';

  handleExpandClick() {
    this.onExpand.emit();
  }
}
