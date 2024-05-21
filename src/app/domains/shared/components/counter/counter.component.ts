import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration = 0;
  @Input ({required: true}) message = '';


  constructor(){
    //No async
    // before render
    // one time
    console.log('constructor');
    console.log('_'.repeat(10))
  }

  ngOnChanges(changes:SimpleChange){
    // before and during render
    console.log("ngOnChanges");
    console.log('_'.repeat(10));
    console.log(changes);
    
  }

  ngOnInit(){
    //after render
    //one time
    //asyn, then, subs, 
    console.log('ngOnInit');
    console.log('_'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }




}
