import Store from "../../store";
import Polygon from "../elements/Polygon";
import Polygon2 from "../elements/Polygon 2";
import { threadId } from "worker_threads";
import { SketchPicker } from 'react-color';

export default class InputManager {

  

  private canvas: HTMLCanvasElement;
  private store: Store;
 
  public newPolygon: any;



  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.store = Store.getInstance();
    
    
    
    canvas.addEventListener("click", event => this.handleMouseEvent(event)); 


    window.addEventListener("keydown", event => this.handleKeyboardEvent(event));
    window.addEventListener("keyup", event => this.handleKeyboardEvent(event));
  }

 
  private handleMouseEvent = (e: MouseEvent) => { 
    if (e.screenX<350 && e.screenX>50 &&e.screenY>150 &&e.screenY<250) {
     this.store.createElement(new Polygon2([{ x: 50, y: 50 }, { x: 350, y: 50 }, { x: 350, y: 150 }, { x: 50, y: 150 }])); 
      
     } else {this.store.createElement(new Polygon([{ x: 50, y: 50 }, { x: 350, y: 50 }, { x: 350, y: 150 }, { x: 50, y: 150 }], {color:'black'})); }
  }

  private handleKeyboardEvent = (e: KeyboardEvent) => { }

}
