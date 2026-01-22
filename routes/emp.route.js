const express = require("express");
const router = express.Router();
const{getEmp, addEmp, deleteEmp, updateEmp} = require("../controllers/emp.controller");

router.get("/list", getEmp);
router.delete("/delete/:id", deleteEmp);
router.patch("/:id", updateEmp);
router.post("/add", addEmp);

module.exports = router;