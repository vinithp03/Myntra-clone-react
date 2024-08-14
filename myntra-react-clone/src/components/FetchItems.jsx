import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemAction } from '../store/ItemSlice';
import { fetchStatusAction } from '../store/FetchingStatusSlice';

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusAction.markFetchingStarted());
    fetch('http://localhost:8080/items', { signal })
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(itemAction.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    }

  }, [fetchStatus]);

  return (
    <></>
  )
}

export default FetchItems