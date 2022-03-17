export interface ManagementRoom {
  roomID?: string;
  Room: string;
  Description: string;
  Status: string;
  
  
}

export interface ManagementRoomStateInterface {
  manageRoom: ManagementRoom[];
  activeRoom?: ManagementRoom;
}
  


function state(): ManagementRoomStateInterface {
  return {
    manageRoom: [
      {
        roomID: '01',
        Room: '234',
        Description: 'CIT BUILDING',
        Status: 'USED',
        
        
        
      },
    ],
  };
}

export default state;
