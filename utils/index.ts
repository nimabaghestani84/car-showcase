export async function fetchCars() {
    const headers={
		'x-rapidapi-key': '2248843e00mshc93a982fe4835c2p114038jsnc58b3a2e57ee',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers:headers,
    });

    const result = await response.json();

    return result;

}
