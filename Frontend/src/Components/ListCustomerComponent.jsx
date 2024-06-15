import React, { useEffect, useState } from 'react'
import { deleteCustomer, listCustomers } from '../Services/CustomerService'
import { useNavigate } from 'react-router-dom'

const ListCustomerComponent = () => {

    const [customers, setCustomers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllCustomers();

    }, [])

    function getAllCustomers(){
        listCustomers().then((response) => {
            setCustomers(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewCustomer() {
        navigator('/add-customer')
    }

    function updateCustomer(id) {
        navigator(`/edit-customer/${id}`)
    }

    async function removeCustomer(id) {
        // Ask the user to confirm the deletion
        const confirmDelete = window.confirm('Are you sure you want to delete this customer?');
        if (confirmDelete) {
            try {
                // Call the deleteCustomer function to remove the customer with the given ID
                await deleteCustomer(id);
                // Refresh the list of customers after deletion
                getAllCustomers();
                console.log(`Customer with ID ${id} has been successfully deleted.`);
            } catch (error) {
                console.error(`Error deleting customer with ID ${id}:`, error);
                // Provide user feedback if necessary (e.g., show a message or notification)
                alert('An error occurred while trying to delete the customer. Please try again.');
            }
        }
    }



  return (
      <div className='container'>
          <br />
          <h2 className='text-center'>List Of Customers</h2>
          <br />
          <button className='btn btn-primary mb-2' onClick={addNewCustomer}>Add Customer</button>
          <table className='table table-striped table-bordered'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>ADDRESS</th>
                      <th>ACTIONS</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      customers.map(customer =>
                          <tr key={customer.id}>
                              <td>{customer.id}</td>
                              <td>{customer.name}</td>
                              <td>{customer.email}</td>
                              <td>{customer.phone}</td>
                              <td>{customer.address}</td>
                              <td>
                                <button className="btn btn-info" onClick={() => updateCustomer(customer.id)}>Update</button>
                                  <button className="btn btn-danger" onClick={() => removeCustomer(customer.id)} style={{ marginLeft: '10px'}}>Delete</button>
                              </td>
                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  )
}

export default ListCustomerComponent