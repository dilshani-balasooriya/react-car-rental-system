import React, { useEffect, useState } from "react";
import { deleteVehicle, listVehicles } from "../Services/VehicleService";
import { useNavigate } from "react-router-dom";

const ListVehicleComponentU = () => {
  const [vehicles, setVehicles] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllVehicles();
  }, []);

  function getAllVehicles() {
    listVehicles()
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  
  return (
    <div className="container">
      <br />
      <h2 className="text-center">List Of Vehicles</h2>
      <br />
      
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>MAKE</th>
            <th>MODEL</th>
            <th>YEAR</th>
            <th>COLOR</th>
            <th>TYPE</th>
            <th>RENTAL STATUS</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.rentalStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListVehicleComponentU;
