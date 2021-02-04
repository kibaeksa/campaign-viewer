import * as React from 'react';
import { useEffect, memo, useCallback } from 'react';
import { RootState } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { removeCampaignRequestAction, renderCampaignRequestAction } from '../reducers/post/actions';

type ListPropType = {
  post: {
    id?: any,
    campaign?: any,
  }
}

const List:React.FunctionComponent<ListPropType> = memo(( post: ListPropType ) => {
  const { device, brand } = useSelector( (state: RootState) => state.post );
  const dispatch = useDispatch();
  useEffect(()=>{
    // console.log(post.post.id);
  },[ post ])

  const sendName = useCallback(() => {
    dispatch(renderCampaignRequestAction(
      device,
      brand,
      post.post.campaign
    ));
  },[ device, brand, post.post.campaign ])

  const removeData = useCallback(() => {
    dispatch(removeCampaignRequestAction( post.post.id ))
  },[])

  return (
    <div>
      <span onClick={removeData}>❌</span><div onClick={sendName} className="campaign-name">{post.post.campaign}</div>
    </div>
  );
});

export default List;