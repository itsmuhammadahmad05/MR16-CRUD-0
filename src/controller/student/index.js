import studentModel from "../../model/student/index.js";

const studentController = {

    //creating record in DB
    create:async (req , res)=>{
        try {
            const payload= req.body;
            const studentData= await studentModel.create({
                firstName:payload.firstName,
                lastName:payload.lastName,
            });
            res.status(200).json({message:"Data added successfully",studentData})
        } 
        catch (error) {
            console.error("Error creating student:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing complete record from DB
    getAll:async (req , res)=>{
        try {
            const studentData= await studentModel.findAll({
                // where:{
                //     firstName:"XYZ", 
                // },
                // order:[["createdAt","DESC"]],
                // limit:0,
            });
            res.status(200).json({message:"Data added successfully",studentData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing a single record from DB
    getSingle:async (req , res)=>{
        try {
            const studentID = req.params.id;
            const student= await studentModel.findByPk(studentID);
            if(!student){
                console.log("Invalid ID")
            }
            console.log({message:"Record Fetched", student})
            res.status(200).json({message:"Record Fetched", student})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // updating a single record in DB
    update:async (req , res)=>{
        try {
            const studentID = req.params.id;
            const payload= req.body;

            const student = await studentModel.findByPk(studentID);
            if(!student){
                console.log("Student not found")
                return res.status(404).json({ error: "Student not found" });
            }

            // await studentModel.update(
            //     { lastName: 'xyz' },
            //     {
            //       where: {
            //         lastName: null,
            //       },
            //     },
            //   );

            const studentUpdate = await student.update(payload);
            await studentUpdate.save();
            console.log({message:"Record Updated", studentUpdate})
            res.status(200).json({message:"Record Updated", studentUpdate})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // deleting a record in DB by ID
    delete:async (req , res)=>{
        try {
            const studentID = req.params.id;

            const student = await studentModel.findByPk(studentID);
            if(!student){
                console.log("Student not found")
                return res.status(404).json({ error: "Student not found" });
            }

            // // //await studentModel.destroy({
            //         where:{
            //             firstName:'xyz',
            //         }
            // // });
            await student.destroy();
            console.log({message:"Record Deleted", student})
            res.status(200).json({message:"Record Deleted", student})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

}

export default studentController;