import React from "react";
import "./App.scss";
import Card from "./component/Card/Card";

const App = () => {
  const [data, setData] = React.useState([
    { id: 1, name: "Artur", balance: 1000 },
    { id: 2, name: "Denis", balance: 1000 },
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
            balance={data.balance}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
