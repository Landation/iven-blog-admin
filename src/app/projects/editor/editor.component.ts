import { Component, OnInit } from '@angular/core';
import { EditorConfig } from './model/EditorConfig';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  paymentsForm = new FormControl();
  tagList: string[] = ['支付宝', '微信', '银行卡', '现金', '微信', '银行卡', '现金'];

  constructor() { }

  ngOnInit() {
    
  }
 

  title = 'app';

  conf = new EditorConfig();
  markdown = '测试语句';

  // 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
}
