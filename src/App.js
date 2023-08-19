import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';
import ListTodo from './component/ListTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
