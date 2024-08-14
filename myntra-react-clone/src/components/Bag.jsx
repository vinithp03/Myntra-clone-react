import React from 'react'
import BagSummary from './BagSummary'
import BagItemContainer from './BagItemContainer'
import { useSelector } from 'react-redux';


const Bag = () => {
  const bagItems = useSelector(store => store.bag);
  const allItems = useSelector(store => store.items);
  const finalItems = allItems.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      <div className="bag-page">
        {finalItems.map((item) => <BagItemContainer item={item} />)}
        <BagSummary summary={finalItems} />
      </div>
    </main>
  )
}

export default Bag