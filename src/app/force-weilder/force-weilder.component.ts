import { Component, OnInit } from '@angular/core';
import { ForceWeilder } from '../force-weilder';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})
export class ForceWeilderComponent implements OnInit {

  forceWeilder: ForceWeilder = {
    name : "Mace Windu",
    id : 1
  }
  constructor() { }

  ngOnInit() {
  }

  // forceWeilder = "Mace Windu";
}
