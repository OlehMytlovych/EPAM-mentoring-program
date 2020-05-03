import DataService from './dataService';
import logic from './logic';

const dataService = new DataService('https://reqres.in/api/');

dataService.getUsers()
  .then((res) => res.json())
  .then((data) => logic.paintUI(data))
  .catch((err) => alert(err));
