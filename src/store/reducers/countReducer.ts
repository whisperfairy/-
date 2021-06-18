/**
 *
 * countReducer.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2021/6/18
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
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


export interface CountState {
	Count: number,
	percent: number,
}

export const initialState = {
	Count:0,
	percent:23.2
};

export const counterReducer = createReducer<CountState, ActionsType>(
	initialState
)

	.handleAction(actions.countAction, (state, action) => ({
		...state,
		//@ts-ignore
		Count: action.payload.count+1,
		percent:action.payload.percent
	}))

