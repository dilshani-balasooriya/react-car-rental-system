import React from 'react';
import '../Maincomp.css';

const MainComponent = () => {
    return (   
        <div>
            <h1>Hello Welcome to Travel Buddy Rental Service</h1>
            {/* Video Section */}
            <div className="videoSection">
                <video src="/assets/Assets/car.mp4" className="video" type="video/mp4" controls autoPlay muted loop style={{ height: "60vh", width: "100%"}}></video>
            </div>


            <h1>Best Vehicles</h1>
            {/* Vehicle Section */}
            <div className='vehicleSection'>
                {/* Car 1 */}
                
                <div className="car">
                <img src="assets/Assets/img1.jpg" alt="Car" className="carImage" />

                    <div className="carDetails">
                        <h2>Toyota Camry</h2>
                        <p>Fuel Type: Petrol</p>
                        <p>Color: White</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (113 reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Car 2 */}
                <div className="car">
                <img src="/assets/Assets/img3 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>Ford Mustang</h2>
                        <p>Fuel Type: Gasoline</p>
                        <p>Color: Yellow</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (111 reviews)</span>
                        </div>
                    </div>
                </div>

                {/* Car 3 */}
                {/* Add similar div structure for Car 3, 4, and 5 */}

                <div className="car">
                <img src="/assets/Assets/img8 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>Audi A4</h2>
                        <p>Fuel Type: Gasoline</p>
                        <p>Color: Black</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (87 reviews)</span>
                        </div>
                    </div>
                </div>
                

                <div className="car">
                <img src="/assets/Assets/img7 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>Tesla Model S</h2>
                        <p>Fuel Type: Gasoline</p>
                        <p>Color:white</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (89 reviews)</span>
                        </div>
                    </div>
                </div>

                <div className="car">
                <img src="/assets/Assets/img5 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>Audi A4</h2>
                        <p>Fuel Type: Gasoline</p>
                        <p>Color: Black</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (96 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="car">
                <img src="/assets/Assets/img4 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>BMW 3 Series</h2>
                        <p>Fuel Type: Gasoline</p>
                        <p>Color: Red</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (120 reviews)</span>
                        </div>
                    </div>
                </div>
                <div className="car">
                <img src="/assets/Assets/img2 - Copy.jpg" alt="Car" className="carImage" />
                    <div className="carDetails">
                        <h2>Honda Civic</h2>
                        <p>Fuel Type: Petrol</p>
                        <p>Color: Red</p>
                        <p>Passengers:4</p>
                        <div className="starReviews">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span> (48 reviews)</span>
                        </div>
                    </div>
                </div>

                
                <section className="Main section">
  <div className="setTitle">
    <h3 className="Title">Best Packages</h3>
  </div>
  <div className="box-container">
    <div className="box">
      <h2>Monthly Rental Packages</h2>
      <h4>$120</h4>
      <h3>Per Month</h3>
      <p>Empower your business with seamless mobility through our monthly rental packages. Drive productivity, reliability, and cost-effectiveness to new heights & Safely..</p>
    </div>
    <div className="box">
      <h2>Daily Rental Packages</h2>
      <h4>$15</h4>
      <h3>per hour</h3>
      <p>Experience freedom and convenience with our daily rental packages. From spontaneous adventures to everyday errands, seize the day without breaking the bank.</p>
    </div>
    <div className="box">
      <h2>Weekly Rental Packages</h2>
      <h4>$25</h4>
      <h3>per week</h3>
      <p>Maximize your business potential with our unbeatable weekly rental packages. Drive efficiency, flexibility, and savings into your operations. With hassle-free rentals.</p>
    </div>
  </div>
</section>
</div>
</div>

    );
};

export default MainComponent;

