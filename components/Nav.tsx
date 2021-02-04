import * as React from 'react';
import { useState, useCallback } from 'react';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from "react-redux";
import { addCampaignRequestAction, loadDataRequestAction, renderCampaignRequestAction } from '../reducers/post';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

type YearPropType = {
  year?: string
}

const Nav:React.FunctionComponent<YearPropType> = ( ) => {

  const [ renderCampaign, setrenderCampaign ] = useState('');
  const dispatch = useDispatch();
  const { device, brand } = useSelector( (state: RootState) => state.post );
  const useStyles = makeStyles((theme: Theme) =>
  // const [ year, setYear ] = useState('');

  createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }),
  );
  const classes = useStyles();

  // 서브밋 start
  const onSubmit = useCallback( e => {
    e.preventDefault();
    dispatch(renderCampaignRequestAction(
      device,
      brand,
      renderCampaign,
      // year,
    ))
    dispatch(addCampaignRequestAction(
      renderCampaign
    ))
    dispatch(loadDataRequestAction())
  }, [ device, brand, renderCampaign ])
  // 서브밋 end

  // 밸류 값 찾기 start
  const onChangerenderCampaign = useCallback((e) => {
    setrenderCampaign( e.target.value );
  },[])
  // 밸류 값 찾기 end

  // const onChangeYear = useCallback((e) => {
  //   setYear( e.target.value );
  // },[])

  return (
    <div className="navigation__container">
      <form onSubmit={onSubmit}>
        <div className="send-data">
          {/* <input type="text" placeholder="연도 입력(미기재 시 기본설정)" name="campaign" value={year} onChange={onChangeYear} className="custom-input year"/> */}
          <Input placeholder="검색어 입력 해주세요." inputProps={{ 'aria-label': 'description' }} name="campaign" value={renderCampaign} onChange={onChangerenderCampaign} />
          <Button type="submit" variant="contained" color="primary">
            검색
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Nav;