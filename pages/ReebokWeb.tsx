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

const ReebokWeb: React.FunctionComponent = () => {
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
            {content ? <div dangerouslySetInnerHTML={htmls()} /> : <div>리복 웹</div>}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps( async( context ) => {
    context.store.dispatch(checkBrandRequestAction('web', 'reebok'));
    context.store.dispatch(setHoverAction('03'));
    context.store.dispatch(setToggleAction(false));
    context.store.dispatch(loadDataRequestAction());
    context.store.dispatch( END );
    await (context.store as SagaStore).sagaTask.toPromise();
    return {
        props: {
            pathname: '/ReebokWeb',
        }
    };
});


export default ReebokWeb;