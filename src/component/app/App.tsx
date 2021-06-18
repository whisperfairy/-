import React from 'react';
import './App.scss';
import { RootState } from "../../store/reducers";
import {useSelector,useDispatch} from "react-redux";
import useInterval from "@use-it/interval";
import {actions} from "../../store";


function App() {
  const { Count,percent } = useSelector((state: RootState) => state.counter);

  const dispatch =useDispatch();
  const array =
    ['23.2%'
      ,'23.6%'
      ,'21.6%'
      ,'23.9%'
      ,'25.9%'
      ,'27.0%'
      ,'27.7%'
      ,'28.0%'
      ,'31.1%'
      ,'32.3%'
      ,'30.6%'
      ,'33.8%'
      ,'45.9%'
      ,'46.3%'
      ,'46.8%'
      ,'48.0%'
      ,'49.3%'
      ,'50.4%'
      ,'52.0%'
      ,'53.2%'
      ,'54.3%'
      ,'54.8%'
      ,'56.1%'
      ,'57.5%'
      ,'58.9%'
      ,'60.2%'
      ,'61.5%'
      ,'63.7%'
      ,'64.6%'
      ,'65.7%'
      ,'67.1%'
      ,'68.4%'
      ,'70.4%'
      ,'71.6%'
      ,'73.2%'
      ,'74.3%'
      ,'75.4%'
      ,'77.2%'
      ,'78.0%'
      ,'78.7%'
      ,'79.6%'
      ,'80.2%'
      ,'81.6%'
      ,'82.4%'
      ,'85.0%'
      ,'83.8%'
      ,'85.1%'
      ,'85.8%'
      ,'86.4%'
      ,'87.0%'
      ,'87.5%'
      ,'88.5%'
      ,'89.0%'
      ,'89.4%'
      ,'89.9%'
      ,'90.1%'
      ,'90.4%'
      ,'90.6%'
      ,'90.7%'
      ,'90.8%'
      ,'90.9%'
      ,'91.3%'
      ,'91.4%'
      ,'91.7%'
      ,'91.8%'
      ,'92.0%'
      ,'92.1%'
      ,'92.1%'
      ,'92.2%'
      ,'92.3%'
      ,'92.4%'
      ,'92.4%'
      ,'92.5%'
      ,'92.6%'
      ,'92.6%'
      ,'92.7%'];

  useInterval(()=>{

    dispatch(actions.countAction(Count,array[Count]))
  },Count<=75?1000:null);
  return (
    <div className="App">
      <div className="header">中小企业复工复产率</div>
      <div className="timer">{percent?percent:'23.2%'}</div>
      <iframe src="https://hanabi.cn/chart.html?id=s_b3fa9f5c78f244f1807c3952edbe1c33&isIframe=1" frameBorder="0"
              width="100%" height="727px"></iframe>
    </div>
  );
}

export default App;
