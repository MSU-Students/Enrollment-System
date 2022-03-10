import { MutationTree } from 'vuex';
import { ManagementRoom, ManagementRoomStateInterface } from './state';

const mutation: MutationTree<ManagementRoomStateInterface> = {
  setRoom(state, payload: ManagementRoom) {
    state.manageRoom.push(payload);
  },
  setNewRoom(state, payload: ManagementRoom) {
    const index = state.manageRoom.findIndex(
      (s) => s.roomID === payload.roomID  
    );
    if (index >= 0) {
      state.manageRoom.splice(index, 1, payload);
    }
  },
  deleteRoom(state, payload: ManagementRoom) {
    const index = state.manageRoom.findIndex(
      (s) => s.roomID === payload.roomID
    );
    if (index >= 0) {
      state.manageRoom.splice(index, 1);
    }
  },
};

export default mutation;
