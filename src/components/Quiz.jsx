export const Quiz = ({ questionBank, mainval, Decrement, Increament, storeAnswers, CheckScore, userAnswers }) => {
  return (
    <section className="Quiz">
      <h1>Question {questionBank[mainval].index}</h1>
      <h2>{questionBank[mainval].question}</h2>
      
      {questionBank[mainval].options.map((value, index) => {
        // Highlight the selected button
        const isSelected = userAnswers[mainval] === value;
        return (
          <button 
            key={index} 
            style={{ backgroundColor: isSelected ? 'lightblue' : '' }}
            onClick={() => storeAnswers(value)}
          >
            {value}
          </button>
        );
      })}

      <section className="nav-cont">
        <button className="navigate" onClick={Decrement} disabled={mainval === 0}>
          <i className="fa-solid fa-left-long"></i> Left
        </button>
        <button className="navigate" onClick={Increament} disabled={mainval === questionBank.length - 1}>
          Right <i className="fa-solid fa-right-long"></i>
        </button>
      </section>

      {mainval === questionBank.length - 1 && (
        <button onClick={CheckScore} className="submit-btn">Check Score</button>
      )}
    </section>
  );
};