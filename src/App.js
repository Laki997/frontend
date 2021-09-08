import RegisterForm from './components/Register/RegisterForm'
import './App.css'
import store from '../src/store/index'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
      <RegisterForm/>
      </div>
      <div className="col-md-7 my-auto">
      </div>
    </div>
  </div>
    </Provider>
  );
}

export default App;
