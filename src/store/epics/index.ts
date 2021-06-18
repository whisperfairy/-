import { combineEpics } from "redux-observable";

import {weatherGetEpic} from "./WeatherEpics";

const epics = combineEpics(...[weatherGetEpic]);

export default epics;
