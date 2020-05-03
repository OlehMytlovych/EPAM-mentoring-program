class DataService {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  getUsers(page = 1) {
    return fetch(`${this.url}users?page=${page}`);
  }
}

export default DataService;
