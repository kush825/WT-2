const mongoose = require('mongoose');
const schema = mongoose.Schema({
   //Orders
   _id: ObjectId,
   userId: ObjectId,
   products: [
      {
         productId: ObjectId,
         quantity: number,
         price: number
      }
   ],
   totalPrice: number,
   shippingAddress: {
      street: string,
      city: string,
      state: string,
      country: string
   },
   status: string, //SHIPPED OR DISPACTHED OR NOT DISPATCHED
   paymentMethod: string,
   createdAt: Date,
   updatedAt: Date,
});