import { useState } from "react";

const App = () => {

  const orders = [
    { id: 1, price: "100$", status: "done" },
    { id: 2, price: "250$", status: "pending" },
    { id: 3, price: "400$", status: "done" },
    { id: 4, price: "150$", status: "cancelled" },
    { id: 5, price: "300$", status: "done" },
  ];

  const [order, setOrder] = useState(orders);
  const [prices, setPrices] = useState(false);
  const [sum, setSum] = useState(0);

  const filterDone = () => {
    const filteredDone = order.filter((item) => item.status === "done");
    setOrder(filteredDone);
  };

  const sumPrice = () => {
    const result = order.map(item => parseInt(item.price)).reduce((acc, item) => acc + item)
    console.log(result);
    setSum(result)
  };

  const filterPrice = () => {
    setPrices(true)
  }

  return (
    <div>
      {sum ? (<p>Сумма: {sum}</p>) : (<ul>
        {order.map((item => (
          <li key={item.id}>{prices ? `Цена: ${item.price}` : `Товар: ${item.id} Цена: ${item.price} Статус: ${item.status}`}</li>
        )))}
      </ul>)}

      <button onClick={filterDone}>Вывести только завершённые заказы</button>
      <button onClick={filterPrice}>Из них — получить только цены.</button>
      <button onClick={sumPrice}>Посчитать сумму всех завершённых заказов.</button>

    </div>
  );

}

export default App;