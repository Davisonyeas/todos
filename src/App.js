import './App.css';
import Header from './Header';
import Field from "./Field";

import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      {/* <AddTask /> */}
      <TaskList />
    </div>
  );
}

export default App;
