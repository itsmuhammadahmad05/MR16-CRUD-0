import marksModel from "../../model/marks/index.js";

const marksController = {

    //creating record in DB
    create:async (req , res)=>{
        try {
            const payload= req.body;
            const marksData= await marksModel.create({

                studentName:payload.studentName,
                subjectName:payload.subjectName,
                obtainMarks:payload.obtainMarks,
                totalMarks:payload.totalMarks,
                
            });
            res.status(200).json({message:"Marks added successfully",marksData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing complete record from DB
    getAll:async (req , res)=>{
        try {
            const marksData= await marksModel.findAll({
                // where:{
                //     studentName:"XYZ", 
                // },
                // order:[["createdAt","DESC"]],
                // limit:0,
            });
            res.status(200).json({message:"Data Fetched",marksData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing a single record from DB
    getSingle:async (req , res)=>{
        try {
            const {id} = req.params;
            const student= await marksModel.findByPk(id);
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
            const {id} = req.params;
            const payload= req.body;

            const student = await marksModel.findByPk(id);
            if(!student){
                console.log("Student not found")
                return res.status(404).json({ error: "Student not found" });
            }

            // await marksModel.update(
            //     { studentName: 'xyz' },
            //     { obtainMarks: 'xyz' },
            //     {
            //       where: {
            //         subjectName: null,
            //       },
            //     },
            //   );

            const updateData = await student.update(payload);
            console.log({message:"Record Updated", updateData})
            res.status(200).json({message:"Record Updated", updateData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // deleting a record in DB by ID
    delete:async (req , res)=>{
        try {
            const {id} = req.params;

            const student = await marksModel.findByPk(id);
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

export default marksController;