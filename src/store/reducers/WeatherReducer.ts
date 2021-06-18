/**
 *
 * WeatherReducer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2021/6/8
 *
 * @内容 作用
 * @内容 作用
 */

import {createReducer} from "typesafe-actions";
import {actions, ActionsType} from "..";
import Weather from '../../model/Weather'

export interface WeatherState {
	weather?: Weather
}

export const initialState = {};

export const weatherReducer = createReducer<WeatherState, ActionsType>(
	initialState
)

	.handleAction(actions.weatherSetAction, (state, action) => ({
		...state,
   //@ts-ignore
		weather: new Weather(...action.payload),
	}))
	.handleAction(actions.weatherErrorAction, (state, action) => {
		console.error(action.payload);
		return state;
	});
