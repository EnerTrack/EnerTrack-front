export interface Top5Countries {
  country: string;
  topEnergyTypes: TopEnergyType[];
}

export interface TopEnergyType {
  energyTypeId: string;
  energyTypeName: string;
  totalGeneratedMwh: number;
}
