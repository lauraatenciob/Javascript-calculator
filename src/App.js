import './App.css';

function App() {
  return (
    <div id='app'>
      <div id='calculator'>
        <div id='screen'>
          <p id='formulaScreen'>0+0</p>
          <p id='display'>0</p>
        </div>
        <div id='buttons'>
          <button id='clear'><i class="fa-solid fa-a"></i><i class="fa-solid fa-c"></i></button>
          <button className="operator" id='divide'><i class="fa-solid fa-divide"></i></button>
          <button className="operator" id='multiply'><i class="fa-solid fa-x"></i></button>
          <button className="number" id='seven'>7</button>
          <button className="number" id='eight'>8</button>
          <button className="number" id='nine'>9</button>
          <button className="operator" id='subtract'><i class="fa-solid fa-minus"></i></button>
          <button className="number" id='four'>4</button>
          <button className="number" id='five'>5</button>
          <button className="number" id='six'>6</button>
          <button className="operator" id='add'><i class="fa-solid fa-plus"></i></button>
          <button className="number" id='one'>1</button>
          <button className="number" id='two'>2</button>
          <button className="number" id='three'>3</button>
          <button className="number" id='zero'>0</button>
          <button id='decimal'>.</button>
          <button id='equals'><i class="fa-solid fa-equals"></i></button>
        </div>
      </div>
    </div>
  );
}

export default App;
