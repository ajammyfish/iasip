import Nav from './components/Nav'
import Quote from './components/Quote'
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav title="IASIP" />

        <Routes>
          <Route path='/quotes' element={<Quote />}/>
          <Route path='/' element={<Quiz />}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
