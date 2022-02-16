import './App.css';

const array = ['Estudar', 'Trabalhar', 'Malhar', 'Correr', 'Jantar'];

const Task = (props) => {
  return (
     <li key={props}>{props}</li>
  )
}
 
function App() {
  return (
    <ul>
      {array.map((tarefa) => Task(tarefa))}
    </ul>
  );
}

export default App;
