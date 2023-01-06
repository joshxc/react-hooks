import React from 'react';

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <h4>
      {text} - {count}
    </h4>
  );
}

// wrap export in memo so that this component will only re-render if its updated
export default React.memo(Count);
