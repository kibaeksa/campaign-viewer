import { 
  addCampaignRequestAction,
  addCampaignSuccessAction,
  addCampaignFailureAction,
  removeCampaignRequestAction,
  removeCampaignSuccessAction,
  removeCampaignFailureAction,
  loadDataRequestAction,
  loadDataSuccessAction,
  loadDataFailureAction,
  renderCampaignRequestAction,
  renderCampaignSuccessAction,
  renderCampaignFailureAction,
  searchCampaignRequestAction,
  searchCampaignSuccessAction,
  searchCampaignFailureAction,
  checkBrandRequestAction,
  checkBrandSuccessAction,
  checkBrandFailureAction,
  setHoverAction,
  setToggleAction,
  downloadFileRequestAction,
  downloadFileSuccessAction,
  downloadFileFailureAction,
} from './actions';

// 액션 타입을 선언할 때 as const를 사용하여야 아래부분 사용가능
export type PostAction = 
| ReturnType<typeof addCampaignRequestAction>
| ReturnType<typeof addCampaignSuccessAction>
| ReturnType<typeof addCampaignFailureAction>
| ReturnType<typeof removeCampaignRequestAction>
| ReturnType<typeof removeCampaignSuccessAction>
| ReturnType<typeof removeCampaignFailureAction>
| ReturnType<typeof loadDataRequestAction>
| ReturnType<typeof loadDataSuccessAction>
| ReturnType<typeof loadDataFailureAction>
| ReturnType<typeof renderCampaignRequestAction>
| ReturnType<typeof renderCampaignSuccessAction>
| ReturnType<typeof renderCampaignFailureAction>
| ReturnType<typeof searchCampaignRequestAction>
| ReturnType<typeof searchCampaignSuccessAction>
| ReturnType<typeof searchCampaignFailureAction>
| ReturnType<typeof checkBrandRequestAction>
| ReturnType<typeof checkBrandSuccessAction>
| ReturnType<typeof checkBrandFailureAction>
| ReturnType<typeof setHoverAction>
| ReturnType<typeof setToggleAction>
| ReturnType<typeof downloadFileRequestAction>
| ReturnType<typeof downloadFileSuccessAction>
| ReturnType<typeof downloadFileFailureAction>


// 상태에서 사용할 데이터 타입 정의(initialState)
export type PostState = {
  content?: any,
  device?: string,
  brand?: string,
  campaign?: string,
  list?: {
    id?: number,
    campaign?: any,
  }[],
  keyword: string,
  listDeleted: boolean,
  isAddingData: boolean,
  isLoadingData: boolean,
  loadingDataErrorReason: boolean,
  addingDataErrorReason: boolean
  hover: string,
  toggle: boolean,
  successSendingFileName: string,
}




export type initialState = PostState[];