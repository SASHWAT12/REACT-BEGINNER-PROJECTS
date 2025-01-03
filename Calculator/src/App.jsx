import './App.css'
import Calculator from './Components/Calculator'

function App() {
  return (
    <div className="app">
        <header>
          <h1>Calculator Project</h1>
        </header>

        <main>
        <Calculator />
        </main>

        <footer>
        <p>Copyright @2024</p>
        </footer>
        
    </div>
  )
}

export default App