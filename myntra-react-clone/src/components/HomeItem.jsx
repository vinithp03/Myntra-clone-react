import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagSliceAction } from '../store/bagSlice';
import { ImBoxAdd } from "react-icons/im";
import { FcDeleteDatabase } from "react-icons/fc";

const HomeItem = ({ item }) => {

  const dispatch = useDispatch();
  const itemsList = useSelector(store => store.items);
  const bagItem = useSelector(store => store.bag).indexOf(item.id) > -1;


  const handleAddToBag = () => {
    dispatch(bagSliceAction.addInitialItems(item.id));

  };

  const handleRemovefromBag = () => {
    dispatch(bagSliceAction.removeFromBag(item.id));
  };


  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {
        bagItem ? <button type="button" className="btn btn-danger btn-add-bag"
          onClick={handleRemovefromBag}><FcDeleteDatabase /> Remove from bag</button>
          :
          <button type="button" className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}> <ImBoxAdd /> Add to Bag</button>
      }
    </div>
  )
}

export default HomeItem