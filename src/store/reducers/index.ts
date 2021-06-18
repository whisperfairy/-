/**
 *
 * index.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2021/6/8
 *
 * @内容 作用
 * @内容 作用
 */

import {combineReducers} from 'redux';
import {weatherReducer, WeatherState} from "./WeatherReducer";
import {counterReducer, CountState} from "./countReducer";

export type RootState = {
	weather: WeatherState
	counter: CountState
}
const reducers = combineReducers({
	weather: weatherReducer,
	counter: counterReducer,
});
export default reducers;
