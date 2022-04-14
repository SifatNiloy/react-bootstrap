import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart/Cart';

function App() {
  const items = [
    { id: '1', name: "sparrow", img: "https://i.guim.co.uk/img/media/91a5272e78198c343c9ba124cd15f5c822f296c8/0_132_4896_2938/master/4896.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=433a5dc1466d8fff1a141ab1904d18d8" },
    { id: '1', name: "sparrow", img: "https://i.guim.co.uk/img/media/91a5272e78198c343c9ba124cd15f5c822f296c8/0_132_4896_2938/master/4896.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=433a5dc1466d8fff1a141ab1904d18d8" },
    { id: '1', name: "sparrow", img: "https://i.guim.co.uk/img/media/91a5272e78198c343c9ba124cd15f5c822f296c8/0_132_4896_2938/master/4896.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=433a5dc1466d8fff1a141ab1904d18d8" },
    { id: '1', name: "sparrow", img: "https://i.guim.co.uk/img/media/91a5272e78198c343c9ba124cd15f5c822f296c8/0_132_4896_2938/master/4896.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=433a5dc1466d8fff1a141ab1904d18d8" }
  ]
  return (
    <div className="App">
      {
        items.map(item => <Cart item={item}> </Cart>)
      }

    </div>
  );
}

export default App;
