const express = require('express');

const route = express.Router();

route.get("/emp/showall");
route.get("/emp/show/:id");
route.post("/emp/add");
route.patch("/emp/update/id");
route.delete("/emp/delete/:id");

module.exports = route;

