import { all, fork, takeLatest, put, call, throttle, takeEvery }  from 'redux-saga/effects';
import axios from 'axios';
import {
    ADD_CAMPAIGN_REQUEST, // 캠페인 이름 DB에서 저장
    ADD_CAMPAIGN_SUCCESS, 
    ADD_CAMPAIGN_FAILURE, 
    REMOVE_CAMPAIGN_REQUEST, // 캠페인 이름 DB에서 삭제
    REMOVE_CAMPAIGN_SUCCESS,
    REMOVE_CAMPAIGN_FAILURE,
    LOAD_DATA_REQUEST, // 카드 데이터 로드
    LOAD_DATA_SUCCESS, 
    LOAD_DATA_FAILURE,
    RENDER_CAMPAIGN_REQUEST, // 캠페인 데이터 출력
    RENDER_CAMPAIGN_SUCCESS,
    RENDER_CAMPAIGN_FAILURE,
    SEARCH_CAMPAIGN_REQUEST, // 카드 데이터 색인
    SEARCH_CAMPAIGN_SUCCESS,
    SEARCH_CAMPAIGN_FAILURE,
    DOWNLOAD_FILE_REQUEST, // 다운로드 파일
    DOWNLOAD_FILE_SUCCESS,
    DOWNLOAD_FILE_FAILURE,
    // 액션 생성 함수
    addCampaignRequestAction,
    loadDataRequestAction,
    renderCampaignRequestAction,
    searchCampaignRequestAction,
    removeCampaignRequestAction,
    downloadFileRequestAction,
} from '../reducers/post/actions';

function addAdidasWebAPI( postData ) {
    return axios.post('/post/addcampaign', postData, {
        withCredentials: true,
    })
}
function* addAdidasWeb( action: ReturnType<typeof addCampaignRequestAction> ) {
    try {
        const result = yield call(addAdidasWebAPI, action.data);
        yield put({
            type: ADD_CAMPAIGN_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: ADD_CAMPAIGN_FAILURE,
            error: e,
        });
    }
}
function* watchAddAdidasWeb() {
    yield takeLatest(ADD_CAMPAIGN_REQUEST, addAdidasWeb);
}
function removeCampaignAPI( postData ) {
    return axios.delete(`/post/${postData}`, {
        withCredentials: true,
    })
}
function* removeCampaign( action: ReturnType<typeof removeCampaignRequestAction> ) {
    try {
        const result = yield call(removeCampaignAPI, action.data);
        yield put({
            type: REMOVE_CAMPAIGN_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: REMOVE_CAMPAIGN_FAILURE,
            error: e,
        });
    }
}
function* watchRemoveName() {
    yield takeLatest(REMOVE_CAMPAIGN_REQUEST, removeCampaign);
}
function loadDataAPI() {
    return axios.post('/post/list', {
        withCredentials: true,
    })
}
function* loadData( action: ReturnType<typeof loadDataRequestAction> ) {
    try {
        const result = yield call(loadDataAPI);
        yield put({
            type: LOAD_DATA_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: LOAD_DATA_FAILURE,
            error: e,
        });
    }
}
function* watchLoadData() {
    yield takeLatest(LOAD_DATA_REQUEST, loadData);
}
function renderCampaignAPI( postData ) {
    return axios.post('/post/campaign', postData, {
        withCredentials: true,
    })
}
function* renderCampaign( action: ReturnType<typeof renderCampaignRequestAction> ) {
    try {
        const result = yield call(renderCampaignAPI, action.data);
        yield put({
            type: RENDER_CAMPAIGN_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: RENDER_CAMPAIGN_FAILURE,
            error: e,
        });
    }
}
function* watchRenderCampaign() {
    yield takeLatest(RENDER_CAMPAIGN_REQUEST, renderCampaign);
}
function searchCampaignAPI( search ) {
    return axios.get(`/post/search/${encodeURIComponent(search)}`)
}
function* searchCampaign( action: ReturnType<typeof searchCampaignRequestAction> ) {
    try {
        const result = yield call(searchCampaignAPI, action.data);
        yield put({
            type: SEARCH_CAMPAIGN_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: SEARCH_CAMPAIGN_FAILURE,
            error: e,
        });
    }
}
function* watchsearchCampaign() {
    yield takeLatest(SEARCH_CAMPAIGN_REQUEST, searchCampaign);
}
function downloadFileAPI( file_name ) {
    return axios.get(`/post/download/${encodeURIComponent(file_name)}`)
}
function* downloadFile( action: ReturnType<typeof downloadFileRequestAction> ) {
    try {
        const result = yield call(downloadFileAPI, action.data);
        yield put({
            type: DOWNLOAD_FILE_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: DOWNLOAD_FILE_FAILURE,
            error: e,
        });
    }
}
function* watchDownloadFile() {
    yield takeLatest(DOWNLOAD_FILE_REQUEST, downloadFile);
}
export default function* postSaga() {
    yield all([
        fork(watchAddAdidasWeb),
        fork(watchLoadData),
        fork(watchRenderCampaign),
        fork(watchsearchCampaign),
        fork(watchRemoveName),
        fork(watchDownloadFile),
    ]);
}