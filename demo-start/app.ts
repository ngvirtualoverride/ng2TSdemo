import { Component, View, bootstrap } from 'angular2/angular2'

@Component({
	selector: 'hello-world'
})
@View({
	templateUrl: 'hello-world.html'
})
class HelloWorld {	
	helloWorld: string;
	
	constructor(){
		this.helloWorld = 'Hello World';
	}
}

bootstrap(HelloWorld);