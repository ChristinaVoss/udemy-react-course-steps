const messages = [
  'Learn React ⭐️',
  'Apply for jobs 💼',
  'Invest your new income 💰'
];

export default function App () {
  const step = 1;
  
  function handlePrevious () {
    alert('Previous step');
  }
  
  function handleNext () {
    alert('Next step');
  }
  
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 && "active"}>1</div>
        <div className={step >= 2 && "active"}>2</div>
        <div className={step >= 3 && "active"}>3</div>
      </div>
      
      <p className="message">Step {step}: {messages[step - 1]}</p>
      
      <div className="buttons">
        <button
          // pass in the handlePrevious function, DO NOT call it (do not add the parentheses)
          onClick={handlePrevious}
          // onMouseEnter={() => console.log('Hovered')}
          style={{backgroundColor: '#7950f2', color: '#fff'}}>
          Previous
          </button>
        <button
          // pass in the handleNext function, DO NOT call it (do not add the parentheses)
          onClick={handleNext}
          style={{backgroundColor: '#7950f2', color: '#fff'}}>
          Next
        </button>
      </div>
    </div>
  );
}