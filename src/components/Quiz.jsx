import { useState } from "react";

export const Quiz = ({questionBank,mainval,Decrement,Increament,userAnswers}) => {
  return (
    <section className="Quiz">
      <h1>Question {questionBank[mainval].index}</h1>
      <h2>{questionBank[mainval].question}</h2>
      {questionBank[mainval].options.map((value, indexes) => {
        return <button key={indexes} onClick={()=>storeAnswers(value,indexes)}>{value}</button>;
      })}
      <section className="nav-cont">
        <button className="navigate" onClick={() => Decrement()}>
          <i className="fa-solid fa-left-long"></i>
        </button>
        <button className="navigate" onClick={() => Increament()}>
          <i className="fa-solid fa-right-long"></i>
        </button>
      </section>
      {mainval == questionBank.length - 1 && (
        <button onClick={CheckScore}>Check Score</button>
      )}
    </section>
  );
};
