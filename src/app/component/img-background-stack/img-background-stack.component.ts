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


  ngOnInit(): void {
  tester(this.backgroundImagesLink)
  
  }
}
function getRandomInt (max: number): number;
function getRandomInt (max: number, min?: number): number {
  if(min !== undefined){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return Math.floor(Math.random() * max);     
}
function tester(backgroundImagesLink:string[]):void {
  
const t = document.getElementById("TT2")!.getElementsByTagName("div")  
const wid = t[1].clientWidth;
const hei = t[1].clientHeight;  

  for (var i = 0; i < t.length; i++){
    const Xcoor: number = getRandomInt(window.innerWidth - t[1].clientWidth) 
    const Ycoor: number = getRandomInt(window.innerHeight - t[1].clientHeight)
    t[i].style.left = `${Xcoor}px`
    t[i].style.top = `${hei * i}px`
    // t[i].style.top = `${Ycoor}px`

    for(var ii = 0; ii < i; ii++){
        if((t[i].offsetLeft + wid >= t[ii].offsetLeft && t[i].offsetLeft + wid <= t[ii].offsetLeft + wid) || 
        (t[i].offsetLeft <= t[ii].offsetLeft + wid && t[i].offsetLeft >= t[ii].offsetLeft)){


          if(t[i].offsetLeft + wid >= t[ii].offsetLeft && t[i].offsetLeft + wid <= t[ii].offsetLeft + wid){
            t[i].style.color = `purple`
            console.log(t[i].offsetLeft);            
            let tempcoord = getRandomInt(window.innerWidth - wid)
            console.log(tempcoord); 
            t[i].style.left = `${tempcoord}px`
            console.log("indefra x+wid af");
            console.log(i + "  :  " + ii);
          }

          if(t[i].offsetLeft <= t[ii].offsetLeft + wid && t[i].offsetLeft >= t[ii].offsetLeft){
            t[i].style.color = `pink`
            console.log(t[i].offsetLeft);            
            let tempcoord = getRandomInt(window.innerWidth - wid)
            console.log(tempcoord);            
            t[i].style.left = `${tempcoord}px`
            console.log("indefra x af");
            console.log(i + "  :  " + ii); 
          }              
        }
        else{
          t[i].style.color = `orange`
          console.log(t[i].offsetLeft + " --- " + i);
          
        }
    }
    t[i].style.backgroundImage =`url(${backgroundImagesLink[i]})`
  }  
}


