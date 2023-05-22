import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-img-background-stack',
  templateUrl: './img-background-stack.component.html',
  styleUrls: ['./img-background-stack.component.css']
})
export class ImgBackgroundStackComponent implements OnInit {

  @ViewChild('ImgCards') ImgCards!: ElementRef;

  constructor() { }
  i: number = 1;
  backgroundImagesLink: string[] = [
    "https://images.unsplash.com/photo-1681829459062-d1247bdf9bd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682443851034-268912d3f5e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=647&q=80",
    "https://images.unsplash.com/photo-1682444395632-03d11ec92b17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1680526092287-ce094b75ac03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1681928676479-d6b689b21406?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80",
    "https://images.unsplash.com/photo-1681329034793-986cbd3c5bd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1682763303696-4505671f19b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"  
  ]

  ngAfterViewInit(): void{

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  ngOnInit(): void {
  const t = document.getElementById("TT2")!.getElementsByTagName("div")
  const tt = document.getElementsByClassName('InnerWrap')
  
  console.log( t[1].clientWidth);
  
    for (var i = 0; i < t.length; i++){
      const Xcoor: number = this.getRandomInt(window.innerWidth - t[1].clientWidth) 
      const Ycoor: number = this.getRandomInt(window.innerHeight - t[1].clientHeight)
      t[i].style.backgroundImage =`url(${this.backgroundImagesLink[i]})`    
      t[i].style.left = `${Xcoor}px`
      t[i].style.top = `${Ycoor}px`
      console.log(t[i].getBoundingClientRect());     
    }
  }
}
