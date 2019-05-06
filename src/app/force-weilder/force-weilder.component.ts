import { Component, OnInit } from '@angular/core';
import { ForceWeilder } from '../force-weilder';
import { WEILDERS } from '../mock-force-weilder';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})

export class ForceWeilderComponent implements OnInit {

  // forceWeilder: ForceWeilder = {
  //   id : 1,
  //   name : "Mace Windu",
  //   force : 42
  // }

  weilders = WEILDERS;
  selectedForceWeilder: ForceWeilder;

  constructor() { }

  ngOnInit() {
  }

  onSelect(forceWeilder: ForceWeilder): void {
    this.selectedForceWeilder = forceWeilder;
  }
  // forceWeilder = "Mace Windu";
}
