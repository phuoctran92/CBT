import produce from 'immer';
import {
  GET_PROFILE_SUCCESS
} from './actionTypes';
export interface IProfileState {
  userId: string,
  fullName: string,
  workSpaceId: string
}

const initial: IProfileState = {
  userId: "",
  fullName: "",
  workSpaceId: ""
};

export const profileReducer = (state = initial, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROFILE_SUCCESS: { 
        const profile = {...action.payload};
        draft = {...profile}
        return draft;
      }
      default: return draft;
    }
  });

