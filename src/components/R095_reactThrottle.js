import React, {  useCallback } from 'react';
import { throttle } from "lodash";

const R095_reactThrottle = () => {
  const throttleFunc = useCallback (
    throttle(() => {
      console.log("############# chk");
    }, 1000),
    []
  );
  
    return (
    <div className="throttle-wrapper">
      <h2>검색어 입력</h2>  
      <input type="text" onChange={throttleFunc} />
    </div>
  );
}

export default R095_reactThrottle;