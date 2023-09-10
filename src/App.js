

// import { Provider } from 'react-redux';
import './App.css';
import Align from './myComponents/align';
import { ToastContainer, toast } from "react-toastify";
// import { store } from './store/Store';




function App() {
  return (



    <div className="App">

<ToastContainer autoClose={1000} theme="dark" />
    <Align/>
    </div>
    

    
  );
}

export default App;
