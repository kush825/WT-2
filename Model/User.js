const mongoose = require('mongoose');
const schema = mongoose.Schema({

   //User
   name: string,
   email: string,
   password: string,
   role: string,
   address: [
      {
         street: string,
         city: string,
         state: string,
         country: string
      }
   ],
   orderHistory: [
      {

         orderDate: Date,
         status: string
      }
   ],
   createdAt: Date,
   updatedAt: Date,

   //Admin

   _id: ObjectId,
   name: string,
   email: string,
   password: string,
   role: string,
   createdAt: Date,
   updatedAt: Date

})