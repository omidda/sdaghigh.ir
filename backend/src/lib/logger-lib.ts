export const logger = (req, res, next) => {
    console.log(`${req.url} : ${req.method}`);
    console.log(`Body: \n ${JSON.stringify(req.body)}}`);

    next();
 }