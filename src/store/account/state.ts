export interface Users {
  id?: number;
  FName: string;
  MName?: string;
  LName: string;
  username?: string;
  password?: string;
  userType?: 'admin' | 'chairperson' | 'registrar';
  contact?: string;
  email?: string;
}

export interface AccountStateInterface {
  allAccount: Users[];
  newUser?: Users;
}

function state(): AccountStateInterface {
  return {
    allAccount: [],
  };
}

export default state;
