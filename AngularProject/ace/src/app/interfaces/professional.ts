export interface ProCategory {
  categoryName: string;
  rating: number;
}

export interface Experience {
  photos: string[];
  about: string;
}

export interface Professional {

  _id: string;
  index: number;
  guid: string;
  isActive: boolean;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  registered: string;
  citizenId: number;
  categories: ProCategory[];
  experience: Experience[];

}
