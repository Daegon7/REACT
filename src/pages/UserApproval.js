import React, { useState, useEffect } from "react";
import axios from 'axios';

const InputComponent = () => {
  const [text, setText1] = useState("");

  useEffect(() => {
    if (text) {
      console.log(`🛠️ 입력 값 변경: ${text}`);
    }
  }, [text]); // ✅ text 값이 변경될 때마다 실행됨

  // alert 출력 함수 추가
  const handleAlert1 = () => {
    alert("hello2");
  };

  useEffect(() => {
    //alert("##### hello3");
  }, []);

  function handleAlert2(){
    alert("hello3");
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/noAuth/helloNoAuth')
      .then(response => {
        const username = response.data;
        alert(`사용자 이름: ${username}`);
      })
      .catch(error => {
        alert(`에러 발생: ${error.message}`);
      });
  }, []);


  return (
    <div>
      <input 
        type="text" 
        placeholder="값을 입력하세요..." 
        value={text} 
        onChange={(e) => setText1(e.target.value)}
      />
      <p>입력한 값: {text}</p>
      {/* 버튼 추가 */}<br/>

      <button onClick={handleAlert1}>알림 출력1</button> <br/><br/>

      <button onClick={handleAlert2}>알림 출력2</button>

    </div>
  );
};

export default InputComponent;