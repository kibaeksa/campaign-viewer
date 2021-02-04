import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { RootState } from '../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { GetStaticProps } from 'next';
import { END } from 'redux-saga';
import wrapper, { SagaStore } from '../store/configureStore';
import { useRouter } from 'next/router';
// import { downloadFileRequestAction } from '../reducers/post';

const About: React.FunctionComponent = () => {
    const { content, device, brand } = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();
    const router = useRouter();
    // const downloadFile = useCallback((e) =>{
    //   e.preventDefault();
    //   dispatch(downloadFileRequestAction('guide.txt'));
    // },[])
    
    return (
        <div className="about">
          {/* <a href="#" onClick={downloadFile}>
            가이드 파일 다운로드
          </a> */}
          <div className="about-head">캠페인 뷰어 임시 메뉴얼</div>
          <br/>
          <ul className="about-ul">
            <li>1. 입력칸은 캠페인 명만 입력합니다.</li>
            <li>2. 캠페인 명은 대소문자가 실제 URL과 일치해야 합니다.</li>
            <li>3. PC에서 MOBILE 전환시, 브랜드 클릭 변경 =&gt; 디바이스 변경 =&gt; 검색 순으로 합니다.</li>
            <li>4. 2021년 캠페인만 검색 가능 합니다.</li>
          </ul>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="about-head">기술 스택</div>
          <br/>
          <br/>
          <div>- 프론트엔드</div>
          <ul className="about-ul">
            <li>자바스크립트</li>
            <li>타입스크립트</li>
            <li>넥스트JS</li>
            <li>리덕스</li>
            <li>리덕스사가</li>
            <li>SCSS</li>
          </ul>
          <br/>
          <div>- 백엔드</div>
          <ul className="about-ul">
            <li>노드JS</li>
            <li>익스프레스</li>
            <li>시퀄라이즈</li>
          </ul>
          <br/>
          <div>- DB 및 배포툴</div>
          <ul className="about-ul">
            <li>MySQL(clearDB)</li>
            <li>HEROKU</li>
          </ul>
        </div>
    );
};


export const getStaticProps: GetStaticProps = wrapper.getStaticProps( async( context ) => {

    // const state = context.store.getState();
    // if( state.post.content ) {
    // context.store.dispatch(checkAdidasWebRequestAction('web', 'adidas'));
    // }
    // const isServer: boolean = !!context.req;
    // const cookie = isServer ? context.req.headers.cookie : '';
    // console.log(isServer,'여기여기');
    
    // if ( context.req && cookie ) axios.defaults.headers.Cookie = cookie;
    context.store.dispatch( END );
    await (context.store as SagaStore).sagaTask.toPromise();
    return { props: {
        pathname: '/About',
    } };
});

export default About;