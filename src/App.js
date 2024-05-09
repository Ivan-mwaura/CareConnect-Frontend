import { Provider } from 'react-redux';
import './App.css';
import Layout from './Pages/Layout/layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './Components/ReduxStore/store'



function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <Layout/>


      </Provider>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />



    </div>
  );
}

export default App;
