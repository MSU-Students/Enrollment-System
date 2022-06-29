export interface enteredSub {
  enteredSubID?: number;
  enteredsubjectCode: string;
  enteredsection: string;
  entereddescriptiveTitle: string;
  enteredtime: string;
  entereddate: string;
  enteredunits: string;
  enteredteacher: string;
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
