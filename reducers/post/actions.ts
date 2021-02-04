export const ADD_CAMPAIGN_REQUEST = 'ADD_CAMPAIGN_REQUEST' as const;
export const ADD_CAMPAIGN_SUCCESS = 'ADD_CAMPAIGN_SUCCESS' as const;
export const ADD_CAMPAIGN_FAILURE = 'ADD_CAMPAIGN_FAILURE' as const;

export const REMOVE_CAMPAIGN_REQUEST = 'REMOVE_CAMPAIGN_REQUEST' as const;
export const REMOVE_CAMPAIGN_SUCCESS = 'REMOVE_CAMPAIGN_SUCCESS' as const;
export const REMOVE_CAMPAIGN_FAILURE = 'REMOVE_CAMPAIGN_FAILURE' as const;

export const RENDER_CAMPAIGN_REQUEST = 'RENDER_CAMPAIGN_REQUEST' as const;
export const RENDER_CAMPAIGN_SUCCESS = 'RENDER_CAMPAIGN_SUCCESS' as const;
export const RENDER_CAMPAIGN_FAILURE = 'RENDER_CAMPAIGN_FAILURE' as const;

export const SEARCH_CAMPAIGN_REQUEST = 'SEARCH_CAMPAIGN_REQUEST' as const;
export const SEARCH_CAMPAIGN_SUCCESS = 'SEARCH_CAMPAIGN_SUCCESS' as const;
export const SEARCH_CAMPAIGN_FAILURE = 'SEARCH_CAMPAIGN_FAILURE' as const;

export const CHECK_BRAND_REQUEST = 'CHECK_BRAND_REQUEST' as const;
export const CHECK_BRAND_SUCCESS = 'CHECK_BRAND_SUCCESS' as const;
export const CHECK_BRAND_FAILURE = 'CHECK_BRAND_FAILURE' as const;

export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST' as const;
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS' as const;
export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE' as const;

export const SET_HOVER = 'SET_HOVER' as const;
export const SET_TOGGLE = 'SET_TOGGLE' as const;

export const DOWNLOAD_FILE_REQUEST = 'DOWNLOAD_FILE_REQUEST' as const;
export const DOWNLOAD_FILE_SUCCESS = 'DOWNLOAD_FILE_SUCCESS' as const;
export const DOWNLOAD_FILE_FAILURE = 'DOWNLOAD_FILE_FAILURE' as const;



export const addCampaignRequestAction = ( campaign: string ) => ({
    type: ADD_CAMPAIGN_REQUEST,
    data: {
        campaign
    },
})
export const addCampaignSuccessAction = ( data: object ) => ({
    type: ADD_CAMPAIGN_SUCCESS,
    data
})
export const addCampaignFailureAction = () => ({
    type: ADD_CAMPAIGN_FAILURE,
})

export const removeCampaignRequestAction = ( listId: object ) => ({
    type: REMOVE_CAMPAIGN_REQUEST,
    data: listId
})
export const removeCampaignSuccessAction = ( data: number ) => ({
    type: REMOVE_CAMPAIGN_SUCCESS,
    data
})
export const removeCampaignFailureAction = () => ({
    type: REMOVE_CAMPAIGN_FAILURE,
})

export const loadDataRequestAction = () => ({
    type: LOAD_DATA_REQUEST,
})
export const loadDataSuccessAction = ( data: any ) => ({
    type: LOAD_DATA_SUCCESS,
    data
})
export const loadDataFailureAction = () => ({
    type: LOAD_DATA_FAILURE,
})



export const checkBrandRequestAction = ( device?: string, brand?: string ) => ({
    type: CHECK_BRAND_REQUEST,
    data: {
        device,
        brand
    }
})
export const checkBrandSuccessAction = () => ({
    type: CHECK_BRAND_SUCCESS,
})
export const checkBrandFailureAction = () => ({
    type: CHECK_BRAND_FAILURE,
})

export const renderCampaignRequestAction = ( device?: string, brand?: string, campaign?: string, year?: string ) => ({
    type: RENDER_CAMPAIGN_REQUEST,
    data: {
        device,
        brand,
        campaign,
        year,
    },
})
export const renderCampaignSuccessAction = ( data: object ) => ({
    type: RENDER_CAMPAIGN_SUCCESS,
    data
})
export const renderCampaignFailureAction = () => ({
    type: RENDER_CAMPAIGN_FAILURE,
})

export const searchCampaignRequestAction = ( data?: any ) => ({
    type: SEARCH_CAMPAIGN_REQUEST,
    data
})
export const searchCampaignSuccessAction = ( data: object[] ) => ({
    type: SEARCH_CAMPAIGN_SUCCESS,
    data
})
export const searchCampaignFailureAction = () => ({
    type: SEARCH_CAMPAIGN_FAILURE,
})

export const setHoverAction = ( hover: string ) => ({
    type: SET_HOVER,
    data: {
        hover
    }
})
export const setToggleAction = ( toggle: boolean ) => ({
    type: SET_TOGGLE,
    data: {
        toggle
    }
})

export const downloadFileRequestAction = ( data: string ) => ({
    type: DOWNLOAD_FILE_REQUEST,
    data
})
export const downloadFileSuccessAction = ( data: string ) => ({
    type: DOWNLOAD_FILE_SUCCESS,
    data
})
export const downloadFileFailureAction = ( fileName: string ) => ({
    type: DOWNLOAD_FILE_FAILURE,
})