export interface ManagementRoom {
  roomID?: number;
  Room: string;
  Description: string;
  Status: string;
}

export interface ManagementRoomStateInterface {
  AllRoom: ManagementRoom[];
  newRoom?: ManagementRoom;
}

function state(): ManagementRoomStateInterface {
  return {
    AllRoom: [],
  };
}

export default state;
