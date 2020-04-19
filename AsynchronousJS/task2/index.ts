/* 

This task has been taken from here (https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/the-last-challenge)
and won't work locally.

So you need to take the code from inside of the getUserData (index.js) and put it in the
module.export func to see if and how it works

*/


const central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

function getUserData(id: number): Promise<object> {
  const dbs = new Map([
          [ 'db1', db1 ],
          [ 'db2', db2 ],
          [ 'db3', db3 ]
      ]);
      
  function getGeneralData(id: number) {
      let dbWithUser: string;
      
      return central(id)
          .then((dbName: string) => {
              dbWithUser = dbName;
              return dbs.get(dbName);
          })
          .catch(() => {
              return Promise.reject('Error central');
          })
          .then((db:(id: number) => object) => {
              return db(id);
          })
          .then((user: object) => { 
              return Object.assign(user, { id });
          })
          .catch((err?: string) => {
              if (err) return Promise.reject(err);
              return Promise.reject('Error ' + dbWithUser);
          })
  }
  
  function getSensitiveData(id: number) {
      return vault(id).catch(() => Promise.reject('Error vault'))
  }

  return Promise.all([getGeneralData(id), getSensitiveData(id)])
      .then(([generalData, vaultData]) => Object.assign(generalData, vaultData) )
      .then((userData: object) => { 
          mark(id)
          return Promise.resolve(userData)
      })
}