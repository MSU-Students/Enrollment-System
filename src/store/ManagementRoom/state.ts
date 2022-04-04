export interface ManagementRoom {
  roomID?: string;
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
