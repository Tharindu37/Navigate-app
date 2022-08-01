import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  productName: string | null='';
  constructor(private  _activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.paramMap.subscribe(response=>{
      this.productName = response.get('name')
    });
  }

}
