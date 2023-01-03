import { useState } from 'react';

function ArrayState() {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    // console.log(e.target[0]);
    setItems([
      ...items,
      {
        id: Date.now(),
        value: e.target[0].value,
      },
    ]);
    // clear form
    e.target[0].value = null;
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems([...newItems]);
  };

  return (
    <div>
      <form onSubmit={(e) => addItem(e)}>
        <input type="text" placeholder="item" />
        <button>Add Item</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.value} <button onClick={() => removeItem(item.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayState;
