import React from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = React.useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  }

  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
      <>
        <main>
          <div>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <Button onClick={onClickMinus} minus>- Lower</Button>
            <Button onClick={onClickPlus} className="plus">Add +</Button>
          </div>
        </main>
      </>
  );
}

export default App;
