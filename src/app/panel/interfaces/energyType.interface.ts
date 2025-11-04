export interface EnergyTypeInterface {
  content:          EnergyTypeContent[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             any[];
  first:            boolean;
  numberOfElements: number;
  empty:            boolean;
}

export interface EnergyTypeContent {
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
