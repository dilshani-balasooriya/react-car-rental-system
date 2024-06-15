import { useState } from 'react'

import './App.css'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListVehicleComponent from './Components/ListVehicleComponent'
import ListCustomerComponent from './Components/ListCustomerComponent'
import ListRentalComponent from './Components/ListRentalComponent'
import ListMainComponent from './Components/ListMainComponent'
import ListVehicleComponentU from './Components/ListVehicleComponentU'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VehicleComponent from './Components/VehicleComponent'
import CustomerComponent from './Components/CustomerComponent'
import RentalComponent from './Components/RentalComponent'
import MainComponent from './Components/MainComponent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/admin" element={<ListMainComponent/>}></Route>
          <Route path="/vehicles" element={<ListVehicleComponent />}></Route>
          <Route path="/customers" element={<ListCustomerComponent />}></Route>
          <Route path="/rentals" element={<ListRentalComponent />}></Route>
          <Route path="/add-vehicle" element={<VehicleComponent />}></Route>
          <Route path="/add-customer" element={<CustomerComponent />}></Route>
          <Route path="/add-rental" element={<RentalComponent />}></Route>
          <Route path="/edit-vehicle/:id" element={<VehicleComponent />}></Route>
          <Route path="/edit-customer/:id" element={<CustomerComponent />}></Route>
          <Route path="/edit-rental/:id" element={<RentalComponent />}></Route>
          <Route path="/vehicles_list" element={<ListVehicleComponentU />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App
