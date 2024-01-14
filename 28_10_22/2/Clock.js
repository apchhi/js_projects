import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <h2>Current time:</h2>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;

// импортировать его и добавить в компонент `Bibliography`, перед списком работ:
```
const Bibliography = ({ works }) => {
  // ...
  return (
    <div className="bibliography">
      <Clock />
      <h1>Shakespeare's Works</h1>
      {worksList}
    </div>
  );
};
```
