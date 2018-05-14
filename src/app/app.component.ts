import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  treeData = {
  	node1:{
  		id:'node1',
  		name:'a1',
  		x:'100',
  		y:'0'
  	},
  	node2:{
  		id:'node2',
  		name:'a2',
  		x:'10',
  		y:'100',
      parentNode:'node1'
  	}，
    node3:{
      id:'node3',
      name:'a3',
      x:'300',
      y:'100',
      parentNode:'node1'
    }
  };
  lineData = [{
    start:'node1',
    id:'1-2',
    end:'node2',
    text:'是'
  },{
    start:'node1',
    id:'1-3',
    end:'node3',
    text:'否'
  }]
  currentItemMove = false;
  currentItem = this.treeData.node1
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
    console.log('aaa',item);
    console.log(e);
  }
  onMouseUp(){
    this.currentItemMove = false;
  }
  onMouseMove(e){
    if(this.currentItemMove){
      // console.log(e);
      this.currentItem.x = e.clientX-200;
      this.currentItem.y = e.clientY-0;
    }
  }
}
