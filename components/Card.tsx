import * as React from 'react';
import { useCallback, useState, useEffect, useRef } from 'react';
import { RootState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import { searchCampaignRequestAction, loadDataRequestAction } from '../reducers/post';
import { debounce } from "lodash";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const Card = () => {
  const useStyles = makeStyles((theme: Theme) =>
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
  const { list } = useSelector((state: RootState) => state.post);
  const [ toggle, setToggle ] = useState(false);
  const dispatch = useDispatch();
  const [ search, setSearch ] = useState('');
  const searchRef: React.MutableRefObject<HTMLInputElement> = useRef();
  const toggleButton = useCallback((e) => {
    e.preventDefault();
    if( toggle == false ) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  },[ toggle ])
  useEffect(debounce(() => {
    console.log(list);
    if( search ) {
      dispatch(searchCampaignRequestAction( search ));
    }
    if( search=='' ) {
      dispatch(loadDataRequestAction());
    }
  }, 200),[ search ]);

  const onChangeSearchValue = useCallback((e) => {
    e.preventDefault();
    setSearch(e.target.value);
  },[ search ]);

  return (
    <>
      <div className={toggle==true ? "card active" : "card"}>
        <div>
          <div className={classes.root}>
            <Input placeholder="검색어 입력 해주세요." inputProps={{ 'aria-label': 'description' }} name="search" value={search} onChange={onChangeSearchValue} />
          </div>
          {/* <input type="text" placeholder="검색어 입력 해주세요." name="search" value={search} onChange={onChangeSearchValue} className="custom-input"/> */}
          <button type="submit" ref={searchRef} className="custom-button">검색</button>
          <div className="card__wrapper">
            { list ? list.map((item) => {
                return (
                    <List key={item.id} post={item}/>
                );
            }):'' }
          </div>
          <div className="toggleButton">
            <a href="" onClick={toggleButton}>
              토글
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;