import { CarProps,FilterProps } from "@/types";

export async function fetchCars(filter : FilterProps) {

    const {manufacturer,fuel,year,limit,model} = filter;
    const headers = {
        'X-RapidAPI-Key': '548bfaabc1mshd46e87fcf99e5f6p160699jsncb857ebd7ea0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
     const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}
     &year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
        headers:headers
     }
     )
      const result = await response.json() 
      return result;
}

export const calculateCarRent = (city_mpg: number,year: number)=> {
    const basePricePerDay = 50; //rental price in dollars
    const mileageFactor = 0.1; //additional rate per mile driven
    const ageFactor = 0.05; // additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental per day

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car:CarProps, angle?:string) => {
    
}