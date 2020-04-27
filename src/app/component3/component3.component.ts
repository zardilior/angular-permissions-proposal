import { Component, OnInit } from '@angular/core';
import { Service3Service } from '../service3.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {
  serviceInfo: string = '';

  constructor(private service3:Service3Service) {
    this.serviceInfo = service3.info();
  }

  ngOnInit(): void {
  }

}
