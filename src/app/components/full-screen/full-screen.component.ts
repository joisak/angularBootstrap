import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.scss']
})
export class FullScreenComponent implements OnInit {
  @HostListener('window:scroll')
  onResize() {}

  constructor() {}

  ngOnInit() {}
}
