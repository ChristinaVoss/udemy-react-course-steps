import { useState } from "react";

const messages = [
  'Learn React ⭐️',
  'Apply for jobs 💼',
  'Invest your new income 💰'
];

export default function App () {
  // create a state variable called step and a function to update it called setStep
  // Always use a set function to update the state variable - DO NOT update it directly
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  
  function handlePrevious () {
    if (step > 1) setStep(step - 1);
  }
  
  function handleNext () {
    if (step < 3) setStep(step + 1);
  }
  
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ''}>1</div>
          <div className={step >= 2 ? "active" : ''}>2</div>
          <div className={step >= 3 ? "active" : ''}>3</div>
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
      </div>)
    }
  </>
  );
}