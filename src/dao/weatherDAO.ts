/**
 *
 * weatherAPI.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2021/6/16
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import Weather from "../model/Weather";

const getWeather = (lat: number, lon: number): Promise<Weather> => {
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=49f8541c5e9d0758175574596d1f532e`
	).then((response) => response.json());
};

export { getWeather };
