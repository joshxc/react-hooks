import React from 'react';

// `children` refers to the inner text inside the <Button>(here)</Button> component in the ParentComponent
function Button({ handleClick, children }) {
  console.log('Rendering Button -', children);
  return <button onClick={handleClick}>{children}</button>;
}

// wrap export in memo so that this component will only re-render if its updated
export default React.memo(Button);
