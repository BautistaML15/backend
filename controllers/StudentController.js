import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) =>{
    try{
        const students = await StudentModel.getStudents();
        res.status(200).json({success: true, message: students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const createStudents = async (req, res) => {
    const {srcode, name, course} = req.body
    try{
        const studentId = await StudentModel.insertStudents(srcode, name, course);
        res.status(200).json({success : true, message: studentId})
    }catch(e){
        console.log(e)
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const editStudents = async (req, res) => {
    const {srcode, name, course} = req.body;
    const {studentId} = req.params

    try{
        const updateId = await StudentModel.updateStudents(srcode, name, course, studentId);
        res.status(200).json({success: true, message: updateId});
    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export const deleteStudents = async (req, res) => {
    const {studentId} = req.params;
    console.log(studentId);

    try{
        const deleteId = await StudentModel.deleteStudents(studentId);
        res.status(200).json({success: true, message: deleteId});
    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}