
import './App.css';
import Taskform from './components/TaskForm';
import Tasklist from './components/TaskList';
import { ContextProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContextProvider>
          <Taskform />
          <Tasklist></Tasklist>
        </ContextProvider>
      </header>
    </div>
  );
}

export default App;
