import React, { useEffect, useState } from 'react'
import { deleteRental, listRentals } from '../Services/RentalService'
import { useNavigate } from 'react-router-dom'

const ListRentalComponent = () => {

    const [rentals, setRentals] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllRentals();
    }, [])

    function getAllRentals() {
        listRentals().then((response) => {
            console.log("Server response:", response.data); // Log the server response
            setRentals(response.data);
            console.log("Rentals state:", rentals); // Log the rentals state after setting it
        }).catch(error => {
            console.error("Error fetching rentals:", error);
        });
    }

    function addNewRental(){
        navigator('/add-rental')
    }

    function updateRental(id) {
        navigator(`/edit-rental/${id}`)
    }

    async function removeRental(id) {
       
        const confirmDelete = window.confirm('Are you sure you want to delete this rental?');
        if (confirmDelete) {
            try {
                await deleteRental(id);
                getAllRentals();
                console.log(`Rental with ID ${id} has been successfully deleted.`);
            } catch (error) {
                console.error(`Error deleting rental with ID ${id}:`, error);
                alert('An error occurred while trying to delete the rental. Please try again.');
            }
        }
    }


  return (
      <div className='container'>
          <br />
          <h2 className='text-center'>List Of Rentals</h2>
          <br />
          <button className='btn btn-primary mb-2' onClick={addNewRental}>Add Rental</button>
          <table className='table table-striped table-bordered'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>VEHICLE ID</th>
                      <th>CUSTOMER ID</th>
                      <th>START DATE</th>
                      <th>END DATE</th>
                      <th>TOTAL COST</th>
                      <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      rentals.map(rental =>
                          <tr key={rental.id}>
                              <td>{rental.id}</td>
                              <td>{rental.vehicleId}</td>
                              <td>{rental.customerId}</td>
                              <td>{rental.startDate}</td>
                              <td>{rental.endDate}</td>
                              <td>{rental.totalCost}</td>
                              <td>
                                  <button className="btn btn-info" onClick={() => updateRental(rental.id)}>Update</button>
                                  <button className="btn btn-danger" onClick={() => removeRental(rental.id)} style={{ marginLeft: '10px'}}>Delete</button>
                              </td>
                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

export default ListRentalComponent