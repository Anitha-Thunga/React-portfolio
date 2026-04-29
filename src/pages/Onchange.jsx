import { useState } from "react";

function Onchange() {
  const [name, SetName] = useState("guest");
  function handleNameChange(e) {
    SetName(e.target.value);
  }
  const [quantity, setQuantity] = useState(0);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  }
  const [comment, setComment] = useState("");
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }
  const [payment, setPayment] = useState("");
    const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  }
  const [shipping, setShipping] = useState("Pick-up");
  const handleRadioChange = (e) =>{
    setShipping(e.target.value);
  }
  return (
    <div>
      <h2>Checkout</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name:{name}</p>
      <br />
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Qunatity: {quantity}</p>
      <br />
      <textarea value={comment} placeholder="enter delivery instructions" onChange={handleCommentChange}></textarea>
      <p>comment:{comment}</p><br />
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">select the payment option:</option>
        <option value="visa">Visa</option>
        <option value="Master-card">Mastercard</option>
        <option value="gift-card">Gift-card</option>
      </select>
      <p>PAyment choosen:{payment}</p>
      <label>
        <input type="radio"  value="Pick-up" checked={shipping === "Pick-up"} onChange={handleRadioChange}/>Pick-up
      </label><br/>
      <label>
        <input type="radio"  value="Delivery" checked={shipping === "Delivery"} onChange={handleRadioChange}/>Delivery
      </label><br/>
      <p>shipping:{shipping}</p>
    </div>
  )
};
export default Onchange;