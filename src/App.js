import { useState } from "react";

const App = () => {

  const products = [
    { id: 1, name: "Ноутбук", price: 800 },
    { id: 2, name: "Телефон", price: 500 },
    { id: 3, name: "Клавиатура", price: 100 },
    { id: 4, name: "Мышь", price: 50 }
  ];

  const [productsList] = useState(products)
  const [cart, setCart] = useState([])
  const [sum, setSum] = useState()

  const addToCart = (item) => {
    if (!cart.some(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id));
  };

  const removeCart = () => {
    setCart([])
    setSum()
  };

  const sumCart = () => {
    const result = cart.reduce((acc, item) => {
    return acc + item.price  
    }, 0)
    setSum(result)
  };

  return (
    <div>
      <h3>Список Товаров</h3>
      <ul>
        {productsList.map(item => {
          return (
            <li key={item.id}>{`${item.name}, цена: ${item.price}`}
              <button onClick={() => addToCart(item)}>Добавить</button></li>
          )
        })}
      </ul>
      <h3>Корзина</h3>
      <ul>
        {cart.map(item => {
          return (
            <li key={item.id}>{`${item.name}, цена: ${item.price}`}
              <button onClick={() => removeFromCart(item.id)}>Удалить</button></li>
          )
        })}
      </ul>
      <div>
      <button onClick={sumCart}>Посчитать сумму</button>
      {sum ? <h3>Сумма: {sum} </h3> : <h3>Сумма:</h3>}
      </div>


      <button onClick={removeCart}>Очистить корзину</button>
    </div>
  )

}

export default App;