import { Component, View, bootstrap } from 'angular2/angular2'
import { DataList } from 'components/app.data.list'
import { httpInjectables } from 'angular2/http'

@Component({
	selector: 'demo-app'
})
@View({
	template: `
		<h1>{{ title }}</h1>
		<data-list></data-list>
	`,
	directives: [DataList]
})
class App {
	title: string;

	constructor(){
		this.title = `Data List example`;
	}
}

bootstrap(App, [httpInjectables]);
