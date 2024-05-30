import { Component, Input, SimpleChange, SimpleChanges, signal } from '@angular/core';

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
  counter = signal (0);
  


  constructor(){
    //No async
    // before render
    // one time
    console.log('constructor');
    console.log('_'.repeat(10))
  }

  ngOnChanges(changes:SimpleChanges){
    // before and during render
    // more time
    console.log("ngOnChanges");
    console.log('_'.repeat(10));
    console.log(changes);

    const duration = changes ['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
    
    
  }

  ngOnInit(){
    //after render
    //one time
    //asyn, then, subs, 
    console.log('ngOnInit');
    console.log('_'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1);
    }, 1000)
  }

  ngAfterViewInit(){
    //after render
    //childs was rendered
    console.log('ngAfterViewInit');
    console.log('_'.repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log('_'.repeat(10));
  }

  doSomething(){
    //async
    console.log('duration has changed')
  }


}
