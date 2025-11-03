export interface PersonInterface {
  content:          PersonContent[];
  pageable:         Pageable;
  last:             boolean;
  totalPages:       number;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}

export interface PersonContent {
  id:           string;
  name:         string;
  lastName:     string;
  email:        string;
  phone:        number;
  document:     string;
  birthDate:    Date;
  status:       string;
  documentType: string;
}

export interface Pageable {
  pageNumber: number;
  pageSize:   number;
  sort:       Sort;
  offset:     number;
  paged:      boolean;
  unpaged:    boolean;
}

export interface Sort {
  empty:    boolean;
  sorted:   boolean;
  unsorted: boolean;
}
