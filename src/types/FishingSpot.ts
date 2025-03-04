export interface IFishingSpot{
  id: number;
  name: string;
  description?: string;
  address: string;
  coordinates: [number, number];
  type?: 'lake' | 'river' | 'sea' | 'pond';
  fishSpecies?: string[];
  bestTimeToFish?: string;
  access?: 'free' | 'paid';
  amenities?: string[];
  photos?: string[];
  rating?: number;
  createdAt?: Date;
  updatedAt?: Date;
}