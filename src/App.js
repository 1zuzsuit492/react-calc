import './index.css';
import Big from 'big.js';


function App() {

  const createDigits = () => {
    const digits = [];
    //generating buttons 1 - 9 without multiple button tags
    for (let i = 1; i < 10; i++) {
      digits.push(<button key={i}>{i}</button>)
    }
    return digits;
  }




  return (
    <div className="App">
      <div className='calc'>
        <div className='display'>
          <span>(0)</span>
        </div>
      </div>

      <div className='ops'>
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
        <button>DEL</button>
      </div>

      <div className='digits'>
        { createDigits() } {/*calling function so #s can appear here*/}
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>

    </div>

  );
}

export default App;
