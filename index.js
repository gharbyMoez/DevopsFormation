const express = require('express');
const port =   5000
const app = express();
app.use(express.json());
var parkings =[
    {
        "id":1,
        "parking":"moez 1",
        "parkingId": 1,
        "city": "Paris",
        "clientName": "Thomas Martin",
        "vehicle": "car",
        "licensePlate": "ED432EF",
        "checkin":"2020-08-21T06:00:00Z",
        "checkout":"2020-08-27T06:00:00Z"
    },
    {
        "id":2,
        "parking":"Parking 1",
        "parkingId": 1,
        "city": "Roissy",
        "clientName": "Frédéric Bertholet",
        "vehicle": "car",
        "licensePlate": "AB213CD",
        "checkin":"2020-08-20T06:00:00Z",
        "checkout":"2020-08-27T06:00:00Z"
    },
    {
        "id":3,
        "parking":"Parking 1",
        "parkingId": 1,
        "city": "Roissy",
        "clientName": "Anatole Basthoz",
        "vehicle": "car",
        "licensePlate": "EB123KJ",
        "checkin":"2020-08-01T06:00:00Z",
        "checkout":"2020-08-17T06:00:00Z"
    }
    ,
    {
        "id":4,
        "parking":"Parking 2",
        "parkingId": 2,
        "city": "Beauvais",
        "clientName": "Caroline Wattremez",
        "vehicle": "car",
        "licensePlate": "BD198DD",
        "checkin":"2020-08-21T06:00:00Z",
        "checkout":"2020-08-27T06:00:00Z"
    },
    {
        "id":5,
        "parking":"Parking 3",
        "parkingId": 3,
        "city": "Orly",
        "clientName": "Thomas Martin",
        "vehicle": "car",
        "licensePlate": "ED432EF",
        "checkin":"2020-08-28T06:00:00Z",
        "checkout":"2020-08-29T06:00:00Z"
    },
    {
        "id":6,
        "parking":"Parking 4",
        "parkingId": 4,
        "city": "Paris",
        "clientName": "Elena Richardson",
        "vehicle": "car",
        "licensePlate": "KJ233OE",
        "checkin":"2020-08-12T06:00:00Z",
        "checkout":"2020-08-17T06:00:00Z"
    }
]
//const parkings = require('./parkings.json');
app.get('/', (req,res) => {   
    
    
  res.send("Hello Devops")

});
app.get('/parkings', (req,res) => {   
    
    
    res.status(200).json(parkings)
   // res.send("Hello Devops")

});
app.put('/parkings/:id', (req,res) => {  
      const id = parseInt(req.params.id)    
      let parking = parkings.find(parking => parking.id === id)  
      parking.name =req.body.name,   
      parking.city =req.body.city,  
      parking.type =req.body.type,  
             res.status(200).json(parking)
            
            })


app.get('/parkings/:id', (req,res) => {  
      const id = parseInt(req.params.id)   
       const parking = parkings.find(parking => parking.id === id)  
         res.status(200).json(parking)
        
        })
app.delete('/parkings/:id', (req,res) => {   
     const id = parseInt(req.params.id)  
       let parking = parkings.find(parking => parking.id === id)  
         parkings.splice(parkings.indexOf(parking),1)   
          res.status(200).json(parkings)})
app.listen(port, () => {    console.log(`Serveur à l'écoute",${port}`)})
 