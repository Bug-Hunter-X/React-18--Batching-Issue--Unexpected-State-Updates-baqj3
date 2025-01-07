```javascript
// In a functional component
import { useState, useReducer } from 'react';

const MyComponent = () => {
  // Using useReducer for better state management
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1;
      default:
        return state;
    }
  }, 0);

  const handleClick = () => {
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
```