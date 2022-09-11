import './App.css';
import TableRender from "./table.js"
import ShipSelect from './ships';

function App() {

  return (
    <div className="App">

      <div className="your_radar">

        <TableRender/>

        <ShipSelect/>
        
      </div>
    </div>
  );
}

export default App;
