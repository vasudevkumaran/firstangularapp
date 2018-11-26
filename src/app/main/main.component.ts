import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnDestroy,AfterViewInit {
  
  constructor() { 

  }

  ngOnInit() {
    //first time load
    console.log("on Init loaded - MainComponent")
  }

  ngOnDestroy(): void {
    //last / destroy
    console.log("on Destroy loaded - MainComponent")
  }

  ngAfterViewInit(): void {
    //view is visible, handle refresh
    // view is ready, add external dependencies if any
    console.log("on ViewInit Loaded - MainComponent")
  }

  

}
