const Emp = require("../models/emp.model");


const getEmp = async (req, res)=>{
    try {
        const EmpList = await Emp.find({});
        console.log("Intered")
        if(EmpList.length == 0){
             res.status(400).json({message:"Empty"}); 
        }
        res.status(200).json(EmpList); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addEmp = async (req, res)=>{
    try {
        const emp = await Emp.create(req.body);
        res.status(200).json(emp); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateEmp = async (req, res)=>{
    try {
        const {id} = req.params;

        const emp = await Emp.findByIdAndUpdate(id, req.body);
        if(!emp){
            res.status(400).json({message: "Emp not found"});
        }
        const updatedEmp = await Emp.findById(id);
        res.status(200).json(updatedEmp); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteEmp = async (req, res)=>{
  try {
        const {id} = req.params;

        const emp = await Emp.findByIdAndDelete(id);
        if(!emp){
            res.status(400).json({message: "Emp not found"});
        }
        res.status(200).json({message:"Emp deleted successfully"}); 
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports ={
    getEmp,
    updateEmp,
    deleteEmp,
    addEmp
}