import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  serviceInfo: string = '';
  otraInfo: string = '';

  constructor(private service1:Service1Service) {
    this.serviceInfo = service1.info();
    this.otraInfo = service1.otraInfo();
  }

  ngOnInit(): void {
  }

}
