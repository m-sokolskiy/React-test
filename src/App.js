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

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div>
      <h3>Список Товаров</h3>
      <ul>
        {productsList.map(item => {
          return (
            <li key={item.id}>{`${item.name}, цена: ${item.price}`}
              <button onClick={() => addToCart(item)}>Добавить в корзину</button></li>
          )
        })}
      </ul>
      <h3>Корзина</h3>
      <ul>
        {cart.map(item => {
          return (
            <li key={item.id}>{`${item.name}, цена: ${item.price}`}
              <button>Удалить из корзины</button></li>
          )
        })}
      </ul>
    </div>
  )

}

export default App;