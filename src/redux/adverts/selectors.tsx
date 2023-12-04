interface ApiResponse {
  adverts: {
    id: number;
    year: number;
    make: string;
    model: string;
    type: string;
    img: string;
    description: string;
    fuelConsumption: string;
    engineSize: string;
    accessories: string[];
    functionalities: string[];
    rentalPrice: string;
    rentalCompany: string;
    address: string;
    rentalConditions: string;
    mileage: number;
  }[];
}

interface Adverts {
  adverts: ApiResponse;
}

// Исправленная функция selectAdverts
export const selectAdverts = (state: Adverts) => state.adverts.adverts;
