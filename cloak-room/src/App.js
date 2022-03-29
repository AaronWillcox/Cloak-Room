import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";

import AboutUsScreen from './Screens/AboutUsScreen';
import AddProductScreen from './Screens/AddProductScreen';
import ContactScreen from './Screens/ContactScreen';
import EditProductScreen from './Screens/EditProductScreen';
import LoginScreen from './Screens/LoginScreen';
import ManageProductScreen from './Screens/ManageProductScreen';
import MenuScreen from './Screens/MenuScreen';
import RegisterScreen from './Screens/RegisterScreen';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
            
//<Route exact path = "/admin/addproduct" element={<AddProductScreen/>}/>
//<Route exact path = "/admin/manageproducts" element={<ManageProductsScreen/>}/>
//<Route exact path = "/admin/product/edit/:id" element={<EditProductScreen/>}/>

function App() {
  return (

    <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<AboutUsScreen/>} />
            <Route exact path="/aboutus" element={<AboutUsScreen/>} />
            <Route exact path ="/menu" element={<MenuScreen/>}/>
            <Route exact path ="/contact" element={<ContactScreen/>}/>
            <Route exact path ="/register" element={<RegisterScreen/>}/>
            <Route exact path ="/login" element={<LoginScreen/>}/>
            <Route exact path = "addproduct" element={<AddProductScreen/>}/>
            <Route exact path = "manageproduct" element={<ManageProductScreen/>}/>
            <Route exact path = "product/edit/:id" element={<EditProductScreen/>}/>
          </Routes>
      </Router>

  );
}

export default App;
