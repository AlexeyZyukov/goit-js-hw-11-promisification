'use strict'

const delay = ms => {
    setTimeout(() => {
        const result = ms;
        return result;
    }, ms);
    
};
const logger = time => console.log(`Resolved after ${time} ms`);

delay(1000).then(logger);