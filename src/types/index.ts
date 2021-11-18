export interface UserData {
  email: string;
  password: string;
  name?: string;
  emailConfirm?: string;
  passwordConfirm?: string;
}

export interface RestaurantsData {
  name: string;
  type: string;
  description: string;
  location: LocationData;
  address: string;
  city: string;
  img: string;
  menu: DishesData[];
  businessHours: BusinessHoursData;
  id: number;
}

export interface BusinessHoursData {
  open: number;
  close: number;
}

export interface DishesData {
  name: string;
  description: string;
  img: string;
  price: number;
}

export interface LocationData {
  lat: number;
  lng: number;
}

export interface ScoreData {
  id: number;
  userId: number;
  restaurantId: number;
  score: number;
}

export interface FavoritesData {
  id: number;
  userId: number;
  restaurantId: number;
}
