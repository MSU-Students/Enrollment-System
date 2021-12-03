export interface AccountInfo {
  fName: string,
  mInitial: string,
  lName: string,
  username: string,
  password: string,
  designation: string,
  status: 'Active' | 'Inactive',
}

export interface AccountStateInterface {
    account: AccountInfo[];
    activeAccount?: AccountInfo;
  }
  
  function state(): AccountStateInterface {
    return {
      account: [
        {
          fName: 'Naeem',
          mInitial: 'M.',
          lName: 'Mangcol',
          username: 'naeem',
          password: 'naeem',
          designation: 'chairperson',
          status: 'Active'

        },
      ]
    }
  };
  
  export default state;
  