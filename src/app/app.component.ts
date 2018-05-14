import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeData = {
  	1:{
  		id:'1',
  		name:'a1',
  		x:'100',
  		y:'0',
      parentNode:'0'
  	},
  	2:{
  		id:'2',
  		name:'a2',
  		x:'10',
  		y:'100',
      parentNode:'1'
  	}，
    3:{
      id:'3',
      name:'a3',
      x:'300',
      y:'100',
      parentNode:'1'
    }
  };
  lineData = [{
    start:'1',
    id:'1-2',
    end:'2',
    text:'是'
  },{
    start:'1',
    id:'1-3',
    end:'3',
    text:'否'
  }]
  currentItemMove = false;
  currentItem = this.treeData['1']
  layerX
  layerY
  objectKeys(obj) {
    return Object.keys(obj);
  }
  onSelect(item){
  	this.currentItem = item;
  	console.log(this.currentItem);
  }
  onMouseDown(item,e){
    this.currentItem = item;
    this.currentItemMove = true;
    this.layerX = e.layerX
    this.layerY = e.layerY
    console.log('aaa',item);
    console.log(e);
  }
  onMouseUp(){
    this.currentItemMove = false;
  }
  onMouseMove(e){
    if(this.currentItemMove){
      // console.log(e);
      this.currentItem.x = e.clientX-200-this.layerX;
      this.currentItem.y = e.clientY-0-this.layerY;
    }
  }
}
