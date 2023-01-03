import { useState } from 'react';

function ObjectState() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <>
      <input
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
        placeholder="First name"
      />
      <input
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
        placeholder="Last name"
      />
      <div>First name: {name.firstName}</div>
      <div>Last name: {name.lastName}</div>
    </>
  );
}

export default ObjectState;
