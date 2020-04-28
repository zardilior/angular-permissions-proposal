import { Component, OnInit } from '@angular/core';
import { Service2Service } from '../service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component implements OnInit {
  serviceInfo: string = '';

  constructor(private service2:Service2Service) {
    this.serviceInfo = service2.info();
  }

  ngOnInit(): void {
  }

}
