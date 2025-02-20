const mongoose = require('mongoose');
const schema = mongoose.Schema({

   name: string,
   description: string,
   brand: string,
   category: string,
   price: number,
   stock: number, // TRUE OR FALSE
   images: [string],
   ratings: [
      {
         userId: ObjectId,
         rating: number,
         review: string,
         createdAt: Date
      }
   ],
   createdAt: Date,
   updatedAt: Date,
})