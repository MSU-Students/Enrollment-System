export interface IAccountInfo {
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
  allAccountUser: IAccountInfo[];
  newAccount?: IAccountInfo;
}

function state(): AccountStateInterface {
  return {
    allAccountUser: [],
  };
}

export default state;
