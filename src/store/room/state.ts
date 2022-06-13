export interface room {
  roomID?: number;
  roomCode: string;
  roomDescription: string;
}

export interface roomStateInterface {
  AllRoom: room[];
  newRoom?: room;
}

function state(): roomStateInterface {
  return {
    AllRoom: [],
  };
}

export default state;
