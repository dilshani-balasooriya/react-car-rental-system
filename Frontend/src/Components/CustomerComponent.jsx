import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createCustomer, updateCustomer, getCustomer } from '../Services/CustomerService';

const CustomerComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getCustomer(id)
                .then((response) => {
                    setName(response.data.name);
                    setEmail(response.data.email);
                    setPhone(response.data.phone);
                    setAddress(response.data.address);
                })
                .catch((error) => {
                    console.error('Error fetching customer:', error);
                });
        }
    }, [id]);

    const handleSaveOrUpdateCustomer = (e) => {
        e.preventDefault();
        const customer = { name, email, phone, address };
        console.log('Saving customer:', customer);

        if (id) {
            updateCustomer(id, customer)
                .then((response) => {
                    console.log('Customer updated:', response.data);
                    navigate('/customers');
                })
                .catch((error) => {
                    console.error('Error updating customer:', error);
                });
        } else {
            createCustomer(customer)
                .then((response) => {
                    console.log('Customer created:', response.data);
                    navigate('/customers');
                })
                .catch((error) => {
                    console.error('Error creating customer:', error);
                });
        }
    };

    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>{id ? 'Update Customer' : 'Add Customer'}</h2>
                    <div className='card-body'>
                        <form onSubmit={handleSaveOrUpdateCustomer}>
                            <div className="form-group mb-2">
                                <label className='form-label'>Customer Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Customer Name'
                                    name='name'
                                    value={name}
                                    className='form-control'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Customer Email:</label>
                                <input
                                    type="email"
                                    placeholder='Enter Customer Email'
                                    name='email'
                                    value={email}
                                    className='form-control'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Customer Phone:</label>
                                <input
                                    type="tel"
                                    placeholder='Enter Customer Phone'
                                    name='phone'
                                    value={phone}
                                    className='form-control'
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className='form-label'>Customer Address:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Customer Address'
                                    name='address'
                                    value={address}
                                    className='form-control'
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' type='submit'>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerComponent;
