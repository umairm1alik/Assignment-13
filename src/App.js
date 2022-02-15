// import logo from './logo.svg';

// Importing Styles
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// importing components
import Header from './Components/Header/Header.js';
import Section1 from './Components/Section1/Section1.js';
import Blog from './Components/Blog/Blog.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Blog/>
    </div>
  );
}

export default App;
