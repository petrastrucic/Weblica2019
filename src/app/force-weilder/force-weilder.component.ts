import { Component, OnInit } from '@angular/core';
import { ForceWeilder } from '../models/force-weilder';
import { WEILDERS } from '../models/mock-force-weilder';
import { ForceWeilderService } from '../force-weilder.service';

@Component({
  selector: 'app-force-weilder',
  templateUrl: './force-weilder.component.html',
  styleUrls: ['./force-weilder.component.css']
})

export class ForceWeilderComponent implements OnInit {

  weilders: ForceWeilder[];
  selectedForceWeilder: ForceWeilder;

  constructor(private weilderService: ForceWeilderService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(forceWeilder: ForceWeilder): void {
    this.selectedForceWeilder = forceWeilder;
  }
  
  getHeroes(): void {
    this.weilderService.getWeilders()
      .subscribe(weilders => this.weilders = weilders);;
  }
}
