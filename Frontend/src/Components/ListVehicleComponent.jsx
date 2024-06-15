import React, {useEffect, useState} from 'react'
import { deleteVehicle, listVehicles } from '../Services/VehicleService'
import { useNavigate } from 'react-router-dom'

const ListVehicleComponent = () => {
  
    const [vehicles, setVehicles] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllVehicles();

    }, [])

    function getAllVehicles(){
        listVehicles().then((response) => {
            setVehicles(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewVehicle(){
        navigator('/add-vehicle')
    }

    function updateVehicle(id){
        navigator(`/edit-vehicle/${id}`)
    }

    const removeVehicle = async (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this vehicle?');
        if (confirmDelete) {
            try {
                await deleteVehicle(id);
                getAllVehicles(); // Refresh the list after deletion
            } catch (error) {
                console.error('Error deleting vehicle:', error);
                // Provide user feedback if necessary
            }
        }
    };
  
    return (
    <div className='container'>
        <br />
            <h2 className='text-center'>List Of Vehicles</h2>
            <br />
            <button className='btn btn-primary mb-2' onClick={addNewVehicle}>Add Vehicle</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>MAKE</th>
                    <th>MODEL</th>
                    <th>YEAR</th>
                    <th>COLOR</th>
                    <th>TYPE</th>
                    <th>RENTAL STATUS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    vehicles.map(vehicle =>
                    <tr key={vehicle.id}>
                        <td>{vehicle.id}</td>
                        <td>{vehicle.make}</td>
                        <td>{vehicle.model}</td>
                        <td>{vehicle.year}</td>
                        <td>{vehicle.color}</td>
                        <td>{vehicle.type}</td>
                        <td>{vehicle.rentalStatus}</td>
                        <td>
                            <button className='btn btn-info' onClick={() => updateVehicle(vehicle.id)}>Update</button>
                            <button  className='btn btn-danger' onClick={() => removeVehicle(vehicle.id)} style={{marginLeft: '10px'}}>Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListVehicleComponent