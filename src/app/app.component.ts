import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeData = {
  	node1:{
  		id:'1',
  		name:'a1',
  		x:'10',
  		y:'10'
  	},
  	node2:{
  		id:'2',
  		name:'a2',
  		x:'10',
  		y:'20'
  	}
  };
  currentItem = {}
  objectKeys(obj) {
    return Object.keys(obj);
  }
  onSelect(item){
  	this.currentItem = item;
  	console.log(this.currentItem);
  }
  setPosition(item){
  	let styleStr = 'left:'+item.x+'px;'
  	styleStr += 'top:'+item.y+'px;'
  	if(item==this.currentItem){
  		styleStr += 'border:1px solid #000;'
  	}
  	return styleStr
  }
}
