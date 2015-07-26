import { Component, View, bootstrap, formDirectives } from 'angular2/angular2'

@Component({
	selector: 'data-bind'
})
@View({
	template:`
		<input id="name" type="text" [(ng-model)]="name" />
		{{ name }}
	` ,
	directives: [formDirectives]
})
class DataBinding {	
	name: string;
	
	constructor(){
		this.name = 'Jose';
	}
}

bootstrap(DataBinding);