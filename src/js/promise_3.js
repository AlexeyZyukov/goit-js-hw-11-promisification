'use strict'

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction, onSuccess, onError) => {
//     const delay = randomIntegerFromInterval(200, 500);
//     setTimeout(() => {
//         const canProcess = Math.random() > 0.3;

// if (canProcess) {
//   onSuccess(transaction.id, delay);
// } else {
//   onError(transaction.id);
// }
// }, delay); };

// const logSuccess = (id, time) => {
//   console.log(`Transaction ${id} processed in ${time} ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*Работает так */ 
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError); 

//========================================================================
/*Должно работать так */

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(1200, 3500);
    console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      }
      reject(transaction.id);
    }, delay);
  })
};    

const logSuccess = ({id, time}) => {
  console.log(`Transaction ${id} processed in ${time} ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess) .catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess) .catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);

//=========================================================================
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /*
//      * Если какое-то условие выполняется, то есть все хорошо,
//      * вызываем resolve и получает данные. Условие зависит от задачи.
//      */
//     resolve('Data passed into resolve function :)');

//     // Если что-то не так, вызываем reject и передаем ошибку
//     //reject("Error passed into reject function :(")
//   }, 2000);
// });

// // Выполнится мгновенно
// console.log('BEFORE promise.then');

// const onResolve = data => {
//   console.log(data); // "Data passed into resolve function :)"
//   console.log('INSIDE promise.then - onResolve');
// };

// const onReject = error => {
//   console.log('INSIDE promise.then - onReject');
//   console.log(error); // "Error passed into reject function :("
// };

// promise.then(
//   // будет вызвана через 2 секунды, если обещание выполнится успешно
//   onResolve,
//   // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//   onReject,
// );

// // Выполнится мгновенно
// console.log('AFTER promise.then');
