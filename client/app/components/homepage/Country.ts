import dotenv from 'dotenv';

dotenv.config();

const headers = new Headers();
headers.append("X-CSCAPI-KEY", process.env.COUNTRY_API_KEY || 'T1M3');

const requestOptions: any = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

const countriesandcity = fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

export default countriesandcity;