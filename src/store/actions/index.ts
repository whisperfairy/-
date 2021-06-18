import { createAction } from "typesafe-actions";
import Weather from "../../model/Weather";
import {
	WEATHER_GET,
	WEATHER_SET,
	MAP_READY,
	WEATHER_ERROR,
} from "../constants";

export const weatherGetAction = createAction(
	WEATHER_GET,
	(lat: number, lng: number) => ({ lat, lng })
)();

export const weatherSetAction = createAction(
	WEATHER_SET,
	(weather: Weather) => weather
)();

export const weatherErrorAction = createAction(
	WEATHER_ERROR,
(error: Error) => (error)
)();

export const mapReadyAction = createAction(MAP_READY)();
