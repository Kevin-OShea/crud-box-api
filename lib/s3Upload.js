require('dotenv').config()
// Load the SDK and UUID
const AWS = require('aws-sdk')
var fs = require('fs')
var path = require('path')
const mime = require('mime-types')

const bucketName = process.env.BUCKET_NAME


const s3 = new AWS.S3({apiVersion: '2006-03-01'})
// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket: bucketName,
                    Key: '',
                    Body: '',
                    ACL: 'public-read',
                    ContentType: 'image/jpeg'}
// File passed in as argument from command line
var file = process.argv[2]
// Configure the file stream and obtain the upload parameters
var fileStream = fs.createReadStream(file)
fileStream.on('error', function (err) {
  console.log('File Error', err)
})
// the file we want to upload in a stream format
uploadParams.Body = fileStream

// name of the file
uploadParams.Key = path.basename(file)
uploadParams.ContentType = mime.lookup(file)
console.log()
// call S3 to retrieve upload file to specified bucket
s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log('Error', err)
  } if (data) {
    console.log('Upload Success', data.Location)
  }
})
