import React, { useState } from 'react';
import { Name } from 'components/Name.js';
import { Food } from 'components/Food.js';
import { Drink } from 'components/Drink.js';
import { Result } from 'components/Result.js';

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }

    return (
      <>
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}

        {step === 2 && (
         <Food food={food} setFood={setFood} />
        )}

        {step === 3 && (
          <Drink drink={drink} setDrink={setDrink} />
        )}

        {step >= 4 && (
          <Result name={name} food={food} drink={drink} />      
        )}


        {step < 4 && (
          <>
            <p>Current step: {step}</p>
            <p>Current name: {name}</p>
            <button type="button" onClick={handleStepIncrease}>Next step 🦶</button>
          </>
        )}  
    </>
  );
}
