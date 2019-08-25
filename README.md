# getir-case-study

This app provides RESTful API with single endpoint for "getir case study" app.

https://express-test-app-yigit.herokuapp.com/

### To run on your localhost

* Install node js (v8.9.1+)
* Run: $ git clone https://github.com/yigitkurtcu/getir-case-study.git
* Run: npm i
* Run: npm run start

### API Endpoint - /findRecords POST
https://express-test-app-yigit.herokuapp.com/findRecords

You should request "post" to the api above with the required parameters.

* “startDate” and “endDate” fields will filter the data by createdAt field.

* Sum of the “count” array in the documents will be between “minCount” and “maxCount”.

### Example Request Payload

```jsx
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```
### Example Response Payload
```jsx
{
  "code":0,
  "msg":"Success",
  "records":[
    {
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2800
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```

### Example Records in Database
```jsx
{    
  "_id":"58adc5172a84567a19698bcb",
  "key":"nyOpG8k775EtWyZh",
  "value":"Hl3rKYwPW5nHY1oS3QRJVtzumkH680QnLoj6MRLXEihYCxmeAw9uwxj8JN7WCkxX5DLkVbo2aVszzXcg6becQosqhyBq92KDkOX0JU6VMBpKCvx2Qk2q3rwMaTbZM YYbFpwgq2Js4MIv",
  "createdAt":"2016-09-10T08:36:32.119Z",
  "counts": [500,400,800,100,600,700,0,900,200]
},
{    
  "_id":"58adc5172a84567a19698bcc",
  "key":"EfmkcTQE2qRTpUIc",
  "value":"TBalxWLHzwkPIxZaiSKPy4XuQ9bwXh3nLKRz3STJ6m4UyyCd2OBDTI7XgQ5oFamU7FJhOyYWs8Hk2nu6Uc30qocxRJbY3hgorCj0kjgASAlGJikygaYqT5ussokJhaApIStAA4NRCsfv",
  "createdAt":"2016-07-28T17:39:26.954Z",
  "counts": [200,100,0,800,300,600,900,700,400,500]
}
```
