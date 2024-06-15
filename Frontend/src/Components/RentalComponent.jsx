import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createRental, updateRental, getRental } from '../Services/RentalService';

const RentalComponent = () => {
    const [vehicleId, setVehicleId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [totalCost, setTotalCost] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                if (id) {
                    const response = await getRental(id);
                    setVehicleId(response.data.vehicleId);
                    setCustomerId(response.data.customerId);
                    setStartDate(new Date(response.data.startDate).toISOString().slice(0, 10));
                    setEndDate(new Date(response.data.endDate).toISOString().slice(0, 10));
                    setTotalCost(response.data.totalCost);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedStartDate = new Date(startDate).toISOString();
        const formattedEndDate = new Date(endDate).toISOString();
        const rental = {
            vehicleId,
            customerId,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            totalCost
        };
        try {
            if (id) {
                await updateRental(id, rental);
            } else {
                await createRental(rental);
            }
            navigate('/rentals');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h2 className="text-center">{id ? 'Update Rental' : 'Add Rental'}</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label className="form-label">Vehicle ID:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Vehicle ID"
                                    name="vehicleId"
                                    value={vehicleId}
                                    className="form-control"
                                    onChange={(e) => setVehicleId(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Customer ID:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Customer ID"
                                    name="customerId"
                                    value={customerId}
                                    className="form-control"
                                    onChange={(e) => setCustomerId(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Rental Start Date:</label>
                                <input
                                    type="date"
                                    placeholder="Enter Rental Start Date"
                                    name="startDate"
                                    value={startDate}
                                    className="form-control"
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Rental End Date:</label>
                                <input
                                    type="date"
                                    placeholder="Enter Rental End Date"
                                    name="endDate"
                                    value={endDate}
                                    className="form-control"
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Rental Total Cost:</label>
                                <input
                                    type="number"
                                    placeholder="Enter Rental Total Cost"
                                    name="totalCost"
                                    value={totalCost}
                                    className="form-control"
                                    onChange={(e) => setTotalCost(e.target.value)}
                                />
                            </div>
                            <button className="btn btn-success" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalComponent;
