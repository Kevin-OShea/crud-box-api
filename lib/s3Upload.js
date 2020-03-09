require('dotenv').config()
const AWS = require('aws-sdk')
var uuid = require('uuid')

// Create name for uploaded object key
var keyName = 'hello_world.txt'
const bucketName = 'koshea'
// Handle promise fulfilled/rejected states
// Create params for putObject call
var objectParams = {Bucket: 'koshea', Key: keyName, Body: 'THIS IS NOT A PIPE!'}
// Create object upload promise
var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise()

uploadPromise
  .then(function (data) {
    console.log('Successfully uploaded data to ' + bucketName + '/' + keyName)
  })
  .catch(function (err) {
    console.error(err, err.stack)
  })
