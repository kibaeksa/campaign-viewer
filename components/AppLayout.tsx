import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../reducers';
import { checkBrandRequestAction, setHoverAction, setToggleAction } from '../reducers/post/actions';
import Nav from '../components/Nav';

const AppLayout: React.FunctionComponent = ({ children }) => {

  const dispatch = useDispatch();
  const switchRef: any  = useRef();
  const { hover, toggle, device } = useSelector( (state: RootState) => state.post );

  const setAdidasWeb = () => {
    dispatch(checkBrandRequestAction('web', 'adidas'));
  };
  const setReebokWeb = () => {
    dispatch(checkBrandRequestAction('web', 'reebok'));
  };
  const setAdidasMobile = () => {
    dispatch(checkBrandRequestAction('mobile', 'adidas'));
  };
  const setReebokMobile = () => {
    dispatch(checkBrandRequestAction('mobile', 'reebok'));
  };

  const hovering = useCallback(( val ) => {
    dispatch(setHoverAction( val ));
  }, [ hover ]);
  const switchButton = useCallback(() => {
    if( toggle == false ) {
      dispatch(setToggleAction(true));
    } else {
      dispatch(setToggleAction(false));
    }
  },[ toggle ]);

  const getWidth = () => typeof window !== "undefined" ? window.outerWidth : '' 
  || typeof document !== "undefined" ? document.documentElement.clientWidth : ''
  // || typeof document !== "undefined" ? document.body.clientWidth : '';

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());
  
    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null;
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId);
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150);
      };
      // set resize listener
      window.addEventListener('resize', resizeListener);
      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener('resize', resizeListener);
      }
    }, [])
    return width;
  }

  let width = useCurrentWidth();

  return (
    <>
      <div className="about"><Link href="/About"><a>ABOUT</a></Link></div>
      <header className="layout-header" role="header">
        <div className="layout-header__container">
          <div className={toggle==true ? 'layout-header__wrapper active' : 'layout-header__wrapper'}>
            <div className={hover=='01'?'layout-header__wrapper__item active':'layout-header__wrapper__item'} onClick={() => { setAdidasWeb(); hovering('01')}}><Link href="/"><a>WEB</a></Link></div>
            <div className={hover=='02'?'layout-header__wrapper__item active':'layout-header__wrapper__item'} onClick={() => { setAdidasMobile(); hovering('02')}}><Link href="/AdidasMobile"><a>MO</a></Link></div>
          </div>
          <div className={toggle==false ? 'layout-header__wrapper active' : 'layout-header__wrapper'}>
            <div className={hover=='03'?'layout-header__wrapper__item active':'layout-header__wrapper__item'} onClick={() => { setReebokWeb(); hovering('03')}}><Link href="/ReebokWeb"><a>WEB</a></Link></div>
            <div className={hover=='04'?'layout-header__wrapper__item active':'layout-header__wrapper__item'} onClick={() => { setReebokMobile(); hovering('04')}}><Link href="/ReebokMobile"><a>MO</a></Link></div>
          </div>
        </div>
        <div className="switch-button" onClick={()=>{switchButton();}}><img src={toggle==true ? "/images/adidas.png" : "/images/reebok.png"} alt="" ref={switchRef}></img></div>
      </header>
      <Nav/>
      <div className="size">{device!='mobile' ? width+'px' : ''}</div>
      <section className={device=='mobile' ? 'content-frame mobile' : 'content-frame'}>
        <section className="content-frame__container" role="main">
          {children}
        </section>
      </section>
    </>
  );
};

export default AppLayout;
