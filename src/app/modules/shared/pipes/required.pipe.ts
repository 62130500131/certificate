import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'appRequiredInput'
})
export class RequiredDirective implements OnInit {

  constructor(private el: ElementRef){

  }
  
  ngOnInit(): void {
    this.el.nativeElement.innerHTML += `<span style="color:red">*</span>`
  }

}
