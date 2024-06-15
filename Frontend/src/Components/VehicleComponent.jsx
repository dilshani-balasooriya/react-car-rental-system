import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createVehicle, updateVehicle, getVehicle } from '../Services/VehicleService';

const VehicleComponent = () => {

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [type, setType] = useState('');
    const [rentalStatus, setRentalStatus] = useState('');

    const navigator = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        let isMounted = true;
        if (id) {
            getVehicle(id)
                .then(response => {
                    if (isMounted) {
                        const data = response.data;
                        setMake(data.make || '');
                        setModel(data.model || '');
                        setYear(data.year || '');
                        setColor(data.color || '');
                        setType(data.type || '');
                        setRentalStatus(data.rentalStatus || '');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
        return () => {
            isMounted = false;
        };
    }, [id]);



    function handleMake(e){
        setMake(e.target.value);
    }

    function handleModel(e) {
        setModel(e.target.value);
    }

    function handleYear(e) {
        setYear(e.target.value);
    }

    function handleColor(e) {
        setColor(e.target.value);
    }

    function handleType(e) {
        setType(e.target.value);
    }

    function handleRentalStatus(e) {
        setRentalStatus(e.target.value);
    }

    function saveOrUpdateVehicle(e) {
        e.preventDefault();

        const vehicle = { make, model, year, color, type, rentalStatus };

        if (id) {
            updateVehicle(id, vehicle)
                .then((response) => {
                    console.log(response.data);
                    navigator('/vehicles');
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            createVehicle(vehicle)
                .then((response) => {
                    console.log(response.data);
                    navigator('/vehicles');
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }



    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Vehicle</h2>
        }else{
            return <h2 className='text-center'>Add Vehicle</h2>
        }
    }

  return (
    <div className='container'>
          <br /><br /><br /><br />
        <div className='row'>
              
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <br />
                {
                    pageTitle()
                }
                <div className='card-body'>
                      <form onSubmit={saveOrUpdateVehicle}>
                        <div className="form-group mb-2">
                            <label className='form-label'>
                                Company:
                            </label>
                            <input type="text" placeholder='Enter Vehicle Make' name='make' value={make} className='form-control' onChange={handleMake}/>
                        </div>
                          <div className="form-group mb-2">
                              <label className='form-label'>
                                  Vehicle Model:
                              </label>
                              <input type="text" placeholder='Enter Vehicle Model' name='model' value={model} className='form-control' onChange={handleModel} />
                          </div>
                          <div className="form-group mb-2">
                              <label className='form-label'>
                                  Vehicle Year:
                              </label>
                              <input type="text" placeholder='Enter Vehicle Year' name='year' value={year} className='form-control' onChange={handleYear} />
                          </div>
                          <div className="form-group mb-2">
                              <label className='form-label'>
                                  Vehicle Color:
                              </label>
                              <input type="text" placeholder='Enter Vehicle Color' name='color' value={color} className='form-control' onChange={handleColor} />
                          </div>
                          <div className="form-group mb-2">
                              <label className='form-label'>
                                  Vehicle Type:
                              </label>
                              <input type="text" placeholder='Enter Vehicle Type' name='type' value={type} className='form-control' onChange={handleType} />
                          </div>
                          <div className="form-group mb-2">
                              <label className='form-label'>
                                  Vehicle Rental Status:
                              </label>
                              <input type="text" placeholder='Enter Vehicle Rental Status' name='rentalStatus' value={rentalStatus} className='form-control' onChange={handleRentalStatus} />
                          </div>
                          <button type='submit' className='btn btn-success'>Submit</button>
                      </form>
                  </div>
            </div>
        </div>
          <br /><br /><br /><br />
    </div>
  )
}

export default VehicleComponent