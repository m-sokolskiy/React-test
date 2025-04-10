import { useState, useEffect } from "react";

const App = () => {

  const [doneOrders, setDoneOrders] = useState([]);

  const orders = [
    { id: 1, price: "100$", status: "done" },
    { id: 2, price: "250$", status: "pending" },
    { id: 3, price: "400$", status: "done" },
    { id: 4, price: "150$", status: "cancelled" },
    { id: 5, price: "300$", status: "done" },
  ];

  const filterDoneOrders = () => {
    const filtered = orders
      .filter((order) => order.status === "done")
      .map((order) => (
        <li key={order.id}>{parseInt(order.price)}</li>
      ));
    setDoneOrders(filtered);
  };

  useEffect(() => {
    filterDoneOrders();
  }, []);

  return (
    <div>
      <ul>{doneOrders}</ul>
    </div>
  );

}

export default App;
