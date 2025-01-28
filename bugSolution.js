```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Update isMounted state on mount and unmount
    const cleanup = () => {
        setIsMounted(false);
      console.log('Unmounted!');
    };
    setIsMounted(true);
    console.log('Mounted!');
    return cleanup;
  }, []);

  useEffect(() => {
    if(isMounted){
        console.log('Component is mounted. Count: ', count);
    }
  }, [count, isMounted]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```