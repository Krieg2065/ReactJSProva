import './App.css';
import ReactDOM from 'react-dom';

const Add = props => <h1>{props.a + props.b}</h1>

function App(props) {
  return <Add a={2} b ={3} />;
}

export default App;
