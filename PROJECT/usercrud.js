const mongoose = require('mongoose');
const user = require('./UserSchema');
const express = require('express');
const bodyParser = require('body-parser');

const atlasUrl = "mongodb+srv://parmarkush8605:Kush%40825@cluster0.wh7cg.mongodb.net/test";

mongoose.connect(atlasUrl).then(() => {
  console.log("Connected to DB Server");

  const app = express();

  app.use(bodyParser.json());

  // Get all users
  app.get("/user", async (req, res) => {
    const data = await user.find();
    res.send(data);
  });

  // Insert a new user
  app.post("/user/insert", async (req, res) => {
      const obj = new user({
        user_id: req.body.user_id,
        username: req.body.username,
        email: req.body.email,
        password_hash: req.body.password_hash,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        address: req.body.address
      });

      const data = await obj.save();
      res.send(data)
  });

  // Delete a user by ID
  app.delete("/user/:id", async (req, res) => {
    try {
      const data = await user.deleteOne({ _id: req.params.id });
      if (data.deletedCount === 0) {
        return res.status(404).send({ error: "User not found" });
      }
      res.send({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).send({ error: "An error occurred", details: error.message });
    }
  });

  // Update (Partial) a user by ID using PATCH
  app.patch("/user/:id", async (req, res) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "Invalid User ID" });
      }

      const data = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!data) {
        return res.status(404).send({ error: "User not found" });
      }

      res.send({ message: "User updated successfully", data });
    } catch (error) {
      res.status(500).send({ error: "An error occurred", details: error.message });
    }
  });

  app.listen(3000, () => {
    console.log("Web server started @ 3000");
  });
});
