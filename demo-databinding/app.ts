import { Component, View, bootstrap } from 'angular2/angular2'

@Component({
	selector: 'data-bind'
})
@View({
	template:`
		<input id="name" type="text" 
			[value]="name" 
			(keyup)="name = $event.target.value" />
		{{ name }}
	` 
})
class DataBinding {	
	name: string;
	
	constructor(){
		this.name = 'Jose';
	}
}

bootstrap(DataBinding);