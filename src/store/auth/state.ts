export interface AUser {
  id?: number;
  fullName: string;
  password: string;
  userType: string;
}

export interface IAuthState {
  currentUser?: AUser;
}

function state(): IAuthState {
  return {
    currentUser: undefined,
  };
}

export default state;
