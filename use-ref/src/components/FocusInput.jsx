import React, { useEffect, useRef } from 'react';

function FocusInput() {
  // Create a reference that attaches to html input element
  const inputRef = useRef(null);

  // empty dependency array so this will only run once (on mount)
  useEffect(() => {
    //focus input element
    inputRef.current.focus();
  }, []);

  return (
    <div className="container">
      Focus Input:
      {/* attach reference to input element */}
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
