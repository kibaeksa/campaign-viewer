import produce from 'immer';
import { PostState, PostAction } from './types';
import { 
    ADD_CAMPAIGN_REQUEST, 
    ADD_CAMPAIGN_SUCCESS, 
    ADD_CAMPAIGN_FAILURE,
    REMOVE_CAMPAIGN_REQUEST,
    REMOVE_CAMPAIGN_SUCCESS,
    REMOVE_CAMPAIGN_FAILURE,
    RENDER_CAMPAIGN_REQUEST,
    RENDER_CAMPAIGN_SUCCESS,
    RENDER_CAMPAIGN_FAILURE,
    SEARCH_CAMPAIGN_REQUEST,
    SEARCH_CAMPAIGN_SUCCESS,
    SEARCH_CAMPAIGN_FAILURE,
    LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
    CHECK_BRAND_REQUEST,
    SET_HOVER,
    SET_TOGGLE,
    DOWNLOAD_FILE_REQUEST,
    DOWNLOAD_FILE_SUCCESS,
    DOWNLOAD_FILE_FAILURE,
} from './actions';

export const initialState: PostState = {
    content:'',
    device: 'web',
    brand: 'adidas',
    campaign: null,
    list: [],
    keyword:'',
    listDeleted: false,
    isAddingData: false,
    isLoadingData: false,
    loadingDataErrorReason: null,
    addingDataErrorReason: null,
    hover: '01',
    toggle: true,
    successSendingFileName: '',
}

export default ( state: PostState = initialState, action: PostAction ): PostState => {
  return produce ( state, (draft) => {
      switch ( action.type ) {

        case ADD_CAMPAIGN_REQUEST: {
            draft.isAddingData = true;
            draft.addingDataErrorReason = null;
            break;
        }
        case ADD_CAMPAIGN_SUCCESS: {
            break;
        }
        case ADD_CAMPAIGN_FAILURE: {
            break;
        }
        case REMOVE_CAMPAIGN_REQUEST: {
            break;
        }
        case REMOVE_CAMPAIGN_SUCCESS: {
            const index = draft.list.findIndex(v => v.id === action.data);
            draft.list.splice(index, 1);
            draft.listDeleted = true;
            break;
        }
        case REMOVE_CAMPAIGN_FAILURE: {
            break;
        }
        case CHECK_BRAND_REQUEST: {
            draft.device = action.data.device;
            draft.brand = action.data.brand;
            draft.campaign = '';
            draft.content = '';
            break;
        }
        case RENDER_CAMPAIGN_REQUEST: {
            draft.isAddingData = true;
            draft.addingDataErrorReason = null;
            draft.device = action.data.device;
            draft.brand = action.data.brand;
            break;
        }
        case RENDER_CAMPAIGN_SUCCESS: {
            draft.content = action.data;
            draft.isAddingData = false;
            draft.campaign = '';
            break;
        }
        case RENDER_CAMPAIGN_FAILURE: {
            draft.addingDataErrorReason = true;
            break;
        }
        case SEARCH_CAMPAIGN_REQUEST: {
            draft.keyword = action.data.search;
            break;
        }
        case SEARCH_CAMPAIGN_SUCCESS: {
            draft.list = action.data;
            break;
        }
        case SEARCH_CAMPAIGN_FAILURE: {
            break;
        }
        case LOAD_DATA_REQUEST: {
            draft.isLoadingData = true;
            draft.loadingDataErrorReason = null;
            break;
        }
        case LOAD_DATA_SUCCESS: {
            draft.list = action.data;
            draft.isLoadingData = false;
            break;
        }
        case LOAD_DATA_FAILURE: {
            draft.loadingDataErrorReason = true;
            break;
        }
        case SET_HOVER: {
            draft.hover = action.data.hover;
            break;
        }
        case SET_TOGGLE: {
            draft.toggle = action.data.toggle;
            break;
        }
        case DOWNLOAD_FILE_REQUEST: {
            draft.successSendingFileName = action.data;
            break;
        }
        case DOWNLOAD_FILE_SUCCESS: {
            break;
        }
        case DOWNLOAD_FILE_FAILURE: {
            break;
        }
        default: {
            break;
        }
      }
  });
};