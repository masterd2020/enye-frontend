import React, {useState, useEffect} from "react";

const Header = ({filter, search}) => {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  
  const handleSearch = (e) => {
    setText(e.target.value);
  };
  
  return(
    <div className="header">
      <form>
        <div className="form__container">
          <label>Search</label><br />
          <input value={text} onChange={(e) => handleSearch(e)} type="text" />
          <button className="filter__btn" onClick={(e) => search(e, text)}>Apply</button>
        </div>
      </form>
      <form>
        <div className="form__container">
          <label>Filter</label><br />
          <button className="filter__btn" onClick={(e) => handleClick(e)}>Filter</button>
        </div>
      </form>
      {
        showModal ? <Filter handleOnFilter={filter} /> : ""
      }
    </div>
  );
}

const Filter = ({handleOnFilter}) => {
  const [gender, setGender] = useState("")
  const [payment, setPayment] = useState("")
  //const [card, setCard] = useState("")
  const handleClick = (e) => {
    if(gender && payment) {
      handleOnFilter(e, {Gender: `${gender.charAt(0).toUpperCase()}${gender.substring(1)}`, PaymentMethod: payment.toLowerCase()})
    } else if(payment) {
      handleOnFilter(e, {PaymentMethod: payment.toLowerCase()})
    } else if(gender) {
      handleOnFilter(e, {Gender: `${gender.charAt(0).toUpperCase()}${gender.substring(1)}`})
    }
  }
  
  return (
    <form className="filter">
      <div className="form__container">
        <label>Gender</label><br />
        <input type="text" onChange={(e) => setGender(e.target.value)} value={gender} />
      </div>
      <div className="form__container">
        <label>Payment Method Type</label><br />
        <input type="text" onChange={(e) => setPayment(e.target.value)}  value={payment}/>
      </div>
      {/*<div className="form__container">
        <label>Credit Card Type</label><br />
        <input type="text" onChange={(e) => setCard(e.target.value)} value={card} />
      </div>*/}
      <div className="form__container">
        <button onClick={(e) => handleClick(e)} className="addfilter__btn">Add Filter</button>
      </div>
    </form>
  );
}

export default Header;