export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '548bfaabc1mshd46e87fcf99e5f6p160699jsncb857ebd7ea0',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
     const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers
     }
     )
      const result = await response.json() 
      return result;
}
