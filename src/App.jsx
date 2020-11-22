import React from "react";
import "./App.scss";
import Card from "./component/Card/Card";

const App = () => {
  const [data, setData] = React.useState([
    { id: 1, name: "Artur", balance: 1000, check: false },
    { id: 2, name: "Denis", balance: 1000, check: false },
  ]);

  const toggleHandler = (id) => {
    setData((prev) =>
      prev.map((data) => {
        if (data.id !== id) {
          return {
            ...data,
            balance: data.balance + 100,
          };
        }
        if (data.id === id) {
          return {
            ...data,
            balance: data.balance - 100,
          };
        }
        return data;
      })
    );
  };

  return (
    <div className="container">
      <div className="cards">
        {data.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            toggleHandler={toggleHandler}
            name={data.name}
            check={data.check}
            balance={data.balance}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
