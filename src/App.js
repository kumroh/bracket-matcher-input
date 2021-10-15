import React from 'react';
import './style.css';

export default function App() {
  const openCloseMap = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const closeKeys = ['}', ')', ']'];

  const [isValid, setValid] = React.useState(true);

  const checkValidity = function validity(keys) {
    const stackKeys = [];
    for (const key of keys) {
      const isOpen = Object.keys(openCloseMap).some((k) => key === k);
      if (isOpen) {
        stackKeys.push(key);
        continue;
      }
      if (closeKeys.includes(key)) {
        const openKey = stackKeys.pop();
        if (openCloseMap[openKey] !== key) {
          return false;
        }
      }
    }

    return stackKeys.length === 0;
  };

  const onInputChange = ({ target: { value } }) => {
    const isOk = checkValidity(value);
    setValid(isOk);
    console.log(value, isOk);
  };

  return (
    <div>
      <input onChange={onInputChange} className={isValid ? '' : "invalid"} />
    </div>
  );
}
