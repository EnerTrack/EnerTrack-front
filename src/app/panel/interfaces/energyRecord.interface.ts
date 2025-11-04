export interface EnergyRecordInterface {
  content:          EnergyRecordContent[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             any[];
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

export interface EnergyRecordContent {
  id:                    string;
  country:               string;
  year:                  number;
  generatedMwh:          number;
  capacityMwh:           number;
  emissionReductionTons: number;
  investmentUsd:         number;
  source:                number;
  createdAt:             Date;
  energyType:            EnergyType;
  userId:                 string;
  person:                Person;
}

export interface EnergyType {
  id:     string;
  name:   string;
  status: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       any[];
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Person {
  id:        string;
  name:      string;
  lastName:  string;
  email:     string;
  phone:     number;
  document:  string;
  birthDate: Date;
  status:    string;
}
