// load s3 upload function
const s3Upload = require('./../lib/s3Upload')
// accept file path from command line
const file = process.argv[2]
// pass file to s3Upload
s3Upload(file)
  .then((response) => console.log('response is', response))
  .catch((err) => console.log('catch is', err))
