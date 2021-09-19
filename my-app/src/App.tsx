import './App.css';
import { List } from './components/list/list';
import { Message } from './types/chat';

function App() {
  const items:Message[] = [{sender:'zhangsan',content:'hello',time:'2021-09-01'}];
  const itemRenderer = (item:Message)=>{
    return <div className={'item-container'}>
      <div className='header'>{item.sender}</div>
      {item.content}
      <div className='footer'>{item.time}</div>
    </div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <List data={items} itemRenderer={itemRenderer}></List>
    </div>
  );
}

export default App;
