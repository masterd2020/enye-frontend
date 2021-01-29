import React, {useState, useEffect} from "react";


const Paginate = ({i, paginate}) => {
  return <p onClick={() => paginate(i)}>{i}</p>     
};

const Body = ({records, loading, paginate, number}) => {
  if(loading) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="content">
        <div className="paginate">
        {
          number.map(el => {
            return <Paginate paginate={paginate} i={el} key={el} />})
        }
        </div>
      {
        records.map(el => {
          return (
            <div key={el.Email} className="content__text">
              <div>
                <p>FirstName</p>
                <p>{el.FirstName}</p>
              </div>
              <div>
                <p>LastName</p>
                <p>{el.LastName}</p>
              </div>
              <div>
                <p>Gender</p>
                <p>{el.Gender}</p>
              </div>
              <div>
                <p>Latitude</p>
                <p>{el.Latitude}</p>
              </div>
              <div>
                <p>Longitude</p>
                <p>{el.Longitude}</p>
              </div>
              <div>
                <p>Credit Card Number</p>
                <p>{el.CreditCardNumber}</p>
              </div>
              <div>
                <p>Credit Card Type</p>
                <p>{el.CreditCardType}</p>
              </div>
              <div>
                <p>Email</p>
                <p>{el.Email}</p>
              </div>
              <div>
                <p>Domain Name</p>
                <p>{el.DomainName}</p>
              </div>
              <div>
                <p>Phone Number</p>
                <p>{el.PhoneNumber}</p>
              </div>
              <div>
                <p>Mac Address</p>
                <p>{el.MacAddress}</p>
              </div>
              <div>
                <p>URl</p>
                <p>{el.URL}</p>
              </div>
              <div>
                <p>User Name</p>
                <p>{el.UserName}</p>
              </div>
              <div>
                <p>Last Login</p>
                <p>{el.LastLogin}</p>
              </div>
              <div>
                <p>Payment Method</p>
                <p>{el.PaymentMethod}</p>
              </div>
            </div>
          )
        })
    }
    </div>
  );
}

export default Body;