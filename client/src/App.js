import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

import {Home} from "./pages/Home/Home";
import { Provider } from 'react-redux';
import {store} from './redux/index'
// import {, Box,Checkbox, Button} from '@mui/joy';

function App() {
  return (
   <div className={'App'}>
    <Provider store={store}>
       <Home/>
       </Provider>
   </div>

  );
}

export default App;
