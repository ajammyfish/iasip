import Nav from './components/Nav'
import Quote from './components/Quote'
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './assets/theme.mp3';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav title="IASIP" />
        <audio volume={0.2} src={theme} autoPlay loop preload="auto" />
        <div className='titlehold'>
          <h1 className='iasip'>It's Always Sunny in Philadelphia</h1>
        </div>
        <Routes>
          <Route path='/quotes' element={<Quote />}/>
          <Route path='/' element={<Quiz />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
