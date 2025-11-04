export interface CountryInterface {
  translations: Translations;
}

export interface Translations {
  ara?: Translation;
  bre?: Translation;
  ces?: Translation;
  cym?: Translation;
  deu?: Translation;
  est?: Translation;
  fin?: Translation;
  fra?: Translation;
  hrv?: Translation;
  hun?: Translation;
  ind?: Translation;
  ita?: Translation;
  jpn?: Translation;
  kor?: Translation;
  nld?: Translation;
  per?: Translation;
  pol?: Translation;
  por?: Translation;
  rus?: Translation;
  slk?: Translation;
  spa?: Translation;
  srp?: Translation;
  swe?: Translation;
  tur?: Translation;
  urd?: Translation;
  zho?: Translation;
}

export interface Translation {
  official: string;
  common: string;
}
