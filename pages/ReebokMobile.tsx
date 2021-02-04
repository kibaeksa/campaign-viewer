import * as React from 'react';
import { useEffect } from 'react';
import { RootState } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { GetServerSideProps } from 'next';
import { END } from 'redux-saga';
import wrapper, { SagaStore } from '../store/configureStore';
import { checkBrandRequestAction, loadDataRequestAction, setHoverAction, setToggleAction } from '../reducers/post/actions';
import { useRouter } from 'next/router';
import { parsingStatic } from '.';

const ReebokMobile: React.FunctionComponent = () => {
    const { content, device, brand } = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        if( content ) {
            parsingStatic(device, brand, content);
            dispatch(loadDataRequestAction());
        }
    },[device, brand, content])

    function htmls () {
        if( content ) {
            return { __html: content.pn };
        }
    }
    
    return (
        <>
            {content ? <div dangerouslySetInnerHTML={htmls()} /> : <div>리복 모바일<br/>모바일 모드에서 보시는것을 권장 드립니다.</div>}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps( async( context ) => {
    context.store.dispatch(checkBrandRequestAction('mobile', 'reebok'));
    context.store.dispatch(setHoverAction('04'));
    context.store.dispatch(setToggleAction(false));
    context.store.dispatch(loadDataRequestAction());
    context.store.dispatch( END );
    await (context.store as SagaStore).sagaTask.toPromise();
    return { 
        props: {
            pathname: '/ReebokMobile',
        }
    };
});


export default ReebokMobile;