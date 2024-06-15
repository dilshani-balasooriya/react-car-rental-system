import React from 'react'

const ListMainComponent = () => {
  return (
    <div>
      <div class="container-main">

        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 class="heading-main">Admin Page</h1>
        <br />
        <br />

        <div class="box-main-container-main">

          <div class="box-main">
              <h3>Vehicles</h3>
              <a href="/vehicles" class="btn">View</a>
          </div>

          <div class="box-main">
              <h3>Rentals</h3>
            <a href="/rentals" class="btn">View</a>
          </div>

          <br />
          <br />
          

        </div>

      </div>
    </div>
  )
}

export default ListMainComponent