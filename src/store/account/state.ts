export interface IAccountInfo {
  accountID?: string;
  FName: string;
  MName: string;
  LName: string;
  username: string;
  password: string;
  designation: string;
  dateCreated: string;
  status: 'Active' | 'Inactive';
}

export interface AccountStateInterface {
  allAccount: IAccountInfo[];
  activeAccount?: IAccountInfo;
}

function state(): AccountStateInterface {
  return {
    allAccount: [
      {
        accountID: '01',
        FName: 'Naeem',
        MName: 'M.',
        LName: 'Mangcol Jr',
        username: 'Admin',
        password: 'Admin',
        designation: 'Admin',
        dateCreated: '12/17/2021',
        status: 'Active',
      },
    ],
  };
}

export default state;
