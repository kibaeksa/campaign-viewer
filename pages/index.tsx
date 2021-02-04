import * as React from 'react';
import { useEffect } from 'react';
import { RootState } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { GetServerSideProps } from 'next';
import { END } from 'redux-saga';
import wrapper, { SagaStore } from '../store/configureStore';
import { checkBrandRequestAction, loadDataRequestAction, setHoverAction } from '../reducers/post/actions';

export const configs = process.env.NODE_ENV === 'production' ? 'campaign-viewer.herokuapp.com' : 'http://localhost:3060';
export function parsingStatic(device, brand, content) {
    // 정적 데이터 주소경로 변경
    const imgs = document.querySelectorAll('.content-frame img');
    const videos = document.querySelectorAll('.content-frame video');
    const Parser = ( elem ) => {
        elem.forEach( function ( val, index ){
            // image
            if( elem[ index ].nodeName == "IMG" ) {
                const original = elem[ index ].src;
                const splitOriginal = original.split(configs, 2);
                if( device == "web" ) {
                    if( elem[ index ].src.indexOf('https://kibaeksa.github.io/adidasWeb/front/')) {
                        elem[ index ].src = 'https://kibaeksa.github.io/adidasWeb/front/' + splitOriginal[1];
                    } else {
                        // console.log(original);
                        elem[ index ].src = original;
                    }
                } else {
                    if( elem[ index ].src.indexOf('https://kibaeksa.github.io/adidasMobile/mobile/')) {
                        elem[ index ].src = 'https://kibaeksa.github.io/adidasMobile/mobile/' + splitOriginal[1];
                    } else {
                        elem[ index ].src = original;
                    }
                }
            }
            // video
            if( elem[ index ].nodeName == "VIDEO" ) {
                const original = elem[ index ].poster;
                const splitOriginal = original.split(configs, 2);
                if ( device == "web" ) {
                    if( elem[ index ].poster.indexOf('https://kibaeksa.github.io/adidasWeb/front/')) {
                        elem[ index ].poster = 'https://kibaeksa.github.io/adidasWeb/front/' + splitOriginal[1];
                    } else {
                        elem[ index ].poster = original;
                    }
                } else {
                    if( elem[ index ].poster.indexOf('https://kibaeksa.github.io/adidasMobile/mobile/')) {
                        elem[ index ].poster = 'https://kibaeksa.github.io/adidasMobile/mobile/' + splitOriginal[1];
                    } else {
                        elem[ index ].poster = original;
                    }
                }
            }
        })
    }            
    new Parser( imgs );
    new Parser( videos );

    // JS, CSS 추가하는 인클루드 객체
    const Include = {
        getArray: function ( files ){
            const array = new Array();
            const item = files.split(',');
            item.forEach(function ( fileName, index ){
                fileName = fileName.replace(/^\s/, '').replace(/\s$/, '');
                array.push(fileName);
            });
            return array;
        },
        JS: function ( files ){
            this.getArray( files ).forEach(function ( fileName, index ){
                let JS  = document.createElement('script');
                JS.type = 'text/javascript';
                JS.src  = '/js/' + fileName + '.js';
                JS.classList.add('putScriptClass');
                document.getElementsByTagName('head')[0].appendChild(JS);
            });
        },
        CSS: function ( files ){
            this.getArray(files).forEach(function ( fileName, index ){
                let CSS   = document.createElement('link');
                CSS.rel   = 'stylesheet';
                CSS.type  = 'text/css';
                CSS.classList.add('putCssClass');
                CSS.href  = '/css/' + fileName + '.css';
                CSS.media = 'screen';
                document.getElementsByTagName('head')[0].appendChild( CSS );
            });
        }
    };
    
    // 인클루드 동적 삽입
    if( device == "web" ) {
        const scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].classList.contains("putScriptClass")) {
                scripts[i].remove();
            }        
        }
        const css = document.getElementsByTagName('head')[0].getElementsByTagName('link');
        for (var i = 0; i < css.length; i++) {
            if (css[i].classList.contains("putCssClass")) {
                css[i].remove();
            }        
        }
        if( brand == "adidas" ) {
            Include.JS('modalPopup.min, adidas');
            Include.CSS('slick, adidas_r, reset');
        }
        if( brand == "reebok" ){
            Include.JS('modalPopup.min, common');
            Include.CSS('slick, reebok, reset, common');
        }
    }
    if( device == "mobile" ) {
        const scripts = document.getElementsByTagName('head')[0].getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].classList.contains("putScriptClass")) {
                scripts[i].remove();
            }        
        }
        const css = document.getElementsByTagName('head')[0].getElementsByTagName('link');
        for (var i = 0; i < css.length; i++) {
            if (css[i].classList.contains("putCssClass")) {
                css[i].remove();
            }        
        }
        if( brand == "adidas" ) {
            Include.JS('modalPopup.min, adidas');
            Include.CSS('slick, style, fonts, style_reebok');
        }
        if( brand == "reebok" ){
            Include.JS('modalPopup.min');
            Include.CSS('slick, style, fonts, reebok_m, style_rm, common_rm');
        }
    }

    // Axios 통신으로 렌더링 후 배경스타일 관련 데이터 리로드: backend에서 가공 후 response.
    if( device == "web" && brand == "adidas" ) {
        // 캠페인 내부 스크립트
        if( content.script ) {
            const scriptLength = document.querySelectorAll('#container_r script').length;
            document.querySelectorAll('#container_r script')[scriptLength-1].remove();
            const JS  = document.createElement('script');
            document.querySelectorAll('#container_r script')[scriptLength-2].after(JS);
            document.querySelectorAll('#container_r script')[scriptLength-1].append(content.script);
        }
        // 캠페인 내부 스타일
        if( content.bg ) {
            const bgLength = document.querySelectorAll('#container_r style').length;
            document.querySelectorAll('#container_r style')[bgLength-1].remove();
            const STYLE  = document.createElement('style');
            document.querySelector('#container_r div').prepend(STYLE);
            document.querySelectorAll('#container_r style')[0].append(content.bg);
        }
    }
    if( device == "mobile" && brand == "adidas" ) {
        if( content.script ) {
            const scriptLength = document.querySelectorAll('#container script').length;
            document.querySelectorAll('#container script')[scriptLength-1].remove();
            const JS  = document.createElement('script');
            document.querySelectorAll('#container script')[scriptLength-2].after(JS);
            document.querySelectorAll('#container script')[scriptLength-1].append(content.script);
        }
        if( content.bg ) {
            const bgLength = document.querySelectorAll('#container style').length;
            document.querySelectorAll('#container style')[bgLength-1].remove();
            const STYLE  = document.createElement('style');
            document.querySelector('#container div').prepend(STYLE);
            document.querySelectorAll('#container style')[0].append(content.bg);
        }
    }
    if( device == "web" && brand == "reebok" ) {
        if( content.script ) {
            const scriptLength = document.querySelectorAll('#contents_wrap script').length;
            document.querySelectorAll('#contents_wrap script')[scriptLength-1].remove();
            const JS  = document.createElement('script');
            document.querySelectorAll('#contents_wrap script')[scriptLength-2].after(JS);
            document.querySelectorAll('#contents_wrap script')[scriptLength-1].append(content.script);
        }
        if( content.bg ) {
            const bgLength = document.querySelectorAll('#contents_wrap style').length;
            document.querySelectorAll('#contents_wrap style')[bgLength-1].remove();
            const STYLE  = document.createElement('style');
            document.querySelector('#contents_wrap div').append(STYLE);
            document.querySelectorAll('#contents_wrap style')[0].append(content.bg);
        }
    }
    if( device == "mobile" && brand == "reebok" ) {
        if( content.script ) {
            const scriptLength = document.querySelectorAll('#contents script').length;
            document.querySelectorAll('#contents script')[scriptLength-1].remove();
            const JS  = document.createElement('script');
            document.querySelectorAll('#contents script')[scriptLength-2].after(JS);
            document.querySelectorAll('#contents script')[scriptLength-1].append(content.script);
        }
        if( content.bg ) {
            const bgLength = document.querySelectorAll('#contents style').length;
            document.querySelectorAll('#contents style')[bgLength-1].remove();
            const STYLE  = document.createElement('style');
            document.querySelector('#contents div').prepend(STYLE);
            document.querySelectorAll('#contents style')[0].append(content.bg);
        }
    }
}

const Home: React.FunctionComponent = () => {
    const { content, device, brand } = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        if( content ) {
            parsingStatic(device, brand, content);
            dispatch(loadDataRequestAction());
        }
    }, [device, brand, content]);
    
    function htmls () {
        if( content ) {
            return { __html: content.pn };
        }
    };
    
    return (
        <>
            {content ? <div dangerouslySetInnerHTML={ htmls() } /> : <div>아디다스 웹</div>}

        </>
    );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps( async( context ) => {
    context.store.dispatch(checkBrandRequestAction('web', 'adidas'));
    context.store.dispatch(setHoverAction('01'));
    context.store.dispatch(loadDataRequestAction());
    // const state = context.store.getState();
    // if( state.post.content ) {
    // }
    // const isServer: boolean = !!context.req;
    // const cookie = isServer ? context.req.headers.cookie : '';
    // console.log(isServer,'여기여기');
    // if ( context.req && cookie ) axios.defaults.headers.Cookie = cookie;
    context.store.dispatch( END );
    await (context.store as SagaStore).sagaTask.toPromise();
    return { 
        props: {
            pathname: '/',
        }
    };
});

export default Home;