export interface UserData {
  email: string;
  password: string;
  name?: string;
  emailConfirm?: string;
  passwordConfirm?: string;
}

export interface RestaurantsData{
  name: string
  type: string
  location: LocationData
  address: string
  city: string
  img: string
  menu: MenuData
  businessHours: number
  id: number
}

export interface MenuData{
  entry: DishesData[]
  main: DishesData[]
  desert: DishesData[]
}

export interface DishesData{
  name: string
  description: string
  img: string
  price: number
}

export interface LocationData{
  lng: number
  ltd: number
}

export interface ScoreData{
  id: number
  userId: number
  restaurantId: number
  score: number
}

export interface FavoritesData{
  id: number
  userId: number
  restaurantId: number
}
