/* 

This task has been taken from here (https://tech.io/playgrounds/482/javascript-async-and-await-keywords/time-to-pratice)
and won't work locally.

So you need to take the code from inside of the job (index.ts) and put it in the
module.export func to see if and how it works

*/

async function job(result: Promise<number>, database: object, errorManager: object) {
  try {
    const id = await result;
    const { name } = await database.get(id);
    return name;
  } catch (error) {
    errorManager.notify(error);
    throw error;
  }
}