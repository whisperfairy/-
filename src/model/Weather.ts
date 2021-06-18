export default class Weather {
	get coord(): { lon: number; lat: number } {
		return this._coord;
	}

	set coord(value: { lon: number; lat: number }) {
		this._coord = value;
	}

	get weather(): Array<{ id: number; main: string; description: string; icon: string }> {
		return this._weather;
	}

	set weather(value: Array<{ id: number; main: string; description: string; icon: string }>) {
		this._weather = value;
	}

	get base(): string {
		return this._base;
	}

	set base(value: string) {
		this._base = value;
	}

	get main(): { temp: number; pressure: number; humidity: number; temp_min: number; temp_max: number; sea_level: number; grnd_level: number } {
		return this._main;
	}

	set main(value: { temp: number; pressure: number; humidity: number; temp_min: number; temp_max: number; sea_level: number; grnd_level: number }) {
		this._main = value;
	}

	get wind(): { speed: number; deg: number } {
		return this._wind;
	}

	set wind(value: { speed: number; deg: number }) {
		this._wind = value;
	}

	get clouds(): { all: number } {
		return this._clouds;
	}

	set clouds(value: { all: number }) {
		this._clouds = value;
	}

	get dt(): number {
		return this._dt;
	}

	set dt(value: number) {
		this._dt = value;
	}

	get sys(): { message: number; country: string; sunrise: number; sunset: number } {
		return this._sys;
	}

	set sys(value: { message: number; country: string; sunrise: number; sunset: number }) {
		this._sys = value;
	}

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get cod(): number {
		return this._cod;
	}

	set cod(value: number) {
		this._cod = value;
	}
	private _coord: {
		lon: number;
		lat: number;
	};
	private _weather: Array<{
		id: number;
		main: string;
		description: string;
		icon: string;
	}>;
	private _base: string;
	private _main: {
		temp: number;
		pressure: number;
		humidity: number;
		temp_min: number;
		temp_max: number;
		sea_level: number;
		grnd_level: number;
	};
	private _wind: {
		speed: number;
		deg: number;
	};
	private _clouds: {
		all: number;
	};
	private _dt: number;
	private _sys: {
		message: number;
		country: string;
		sunrise: number;
		sunset: number;
	};
	private _id: number;
	private _name: string;
	private _cod: number;


	constructor(coord: { lon: number; lat: number }, weather: Array<{ id: number; main: string; description: string; icon: string }>, base: string, main: { temp: number; pressure: number; humidity: number; temp_min: number; temp_max: number; sea_level: number; grnd_level: number }, wind: { speed: number; deg: number }, clouds: { all: number }, dt: number, sys: { message: number; country: string; sunrise: number; sunset: number }, id: number, name: string, cod: number) {
		this._coord = coord;
		this._weather = weather;
		this._base = base;
		this._main = main;
		this._wind = wind;
		this._clouds = clouds;
		this._dt = dt;
		this._sys = sys;
		this._id = id;
		this._name = name;
		this._cod = cod;
	}
}
