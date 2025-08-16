


const headers = new Headers();
headers.append("X-CSCAPI-KEY", "T1M3YkFYem1jemdGTzJCY0dHRU5OZ3hkMWYySEM1ZlhvNWZRYm5BQg==");

const requestOptions: any = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const countriesandcity = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export default countriesandcity;