export interface records {
  recordsID?: number;
  Section: string;
  subject: string;
}

export interface recordsStateInterface {
  AllRecords: records[];
  newRecords?: records;
}

function state(): recordsStateInterface {
  return {
    AllRecords: [],
  };
}

export default state;
