import { Component, View, NgFor } from 'angular2/angular2'
import { Http } from 'angular2/http'

interface IPlace {
	id: number,
	name: string
}

@Component({
	selector: 'data-list'
})
@View({
	templateUrl: 'components/app.data.list.html',
	directives: [NgFor]
})
export class DataList {
	places: Array<IPlace>

	constructor(private http: Http){
		this.http.get('data/places.json').toRx()
			.map(res => res.json()).subscribe(_places => {
				this.places = _places
			});
	}
}
