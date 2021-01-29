import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render(<App />,document.getElementById('potato'));
//react application은 하나의 component만을 rendering
//그래서 모든것은 <App />안에 들어가야 함. 

/* 
  <App />
  이런걸 component라고 부름 (react는 component)
  component가 데이터를 보여줌 
  component는 html를 반환하는 함수 . 
  jsx는 유일한 react 개념. 
  <App /> <- 이게 component사용하는 방법. 
  App이렇게하면 react를 사용하는 것이 아님. 
  */
