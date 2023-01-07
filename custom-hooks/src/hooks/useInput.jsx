//! useInput hook

import { useState } from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  // to be spread inside of a html input element:
  // <input {...bind} />
  // <input value={ value } onChange={ e => setValue(e.target.value) } />
  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

export default useInput;
