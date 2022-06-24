import express from "express";

const api = express();
api.use(express.json());

api.listen(3335, () => {
  console.log("API listening on 3336");
});
