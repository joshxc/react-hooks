import React from 'react';

function Title() {
  console.log('Rendering Title');
  return <h2>useCallback hook</h2>;
}

// wrap export in memo so that this component will only re-render if its updated
export default React.memo(Title);
