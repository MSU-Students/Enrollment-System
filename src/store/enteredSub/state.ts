export interface enteredSub {
  enteredSubID?: number;
  subjectCode: string;
  section: string;
  descriptiveTitle: string;
  time: string;
  date: string;
  units: string;
  teacher: string;
}

export interface enteredSubStateInterface {
  AllEnteredSub: enteredSub[];
}

function state(): enteredSubStateInterface {
  return {
    AllEnteredSub: [],
  };
}

export default state;
