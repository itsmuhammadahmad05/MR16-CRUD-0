import teacherModel from "../../model/teacher/index.js";

const teacherController = {

    //creating record in DB
    create:async (req , res)=>{
        try {
            const payload= req.body;

            const teacherData= await teacherModel.create({
                firstName:payload.firstName,
                lastName:payload.lastName,
                course:payload.course
            });
            res.status(200).json({message:"Data added successfully",teacherData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing complete record from DB
    getAll:async (req , res)=>{
        try {
            const teacherData= await teacherModel.findAll({
                // where:{
                //     firstName:"XYZ", 
                // },
                // order:[["createdAt","DESC"]],
                // limit:0,
            });
            res.status(200).json({message:"Data added successfully",teacherData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing a single record from DB
    getSingle:async (req , res)=>{
        try {
            const teacherID = req.params.id;
            const teacher= await teacherModel.findByPk(teacherID);
            if(teacher === null){
                console.log("Invalid ID")
            }
            console.log({message:"Record Fetched", teacher})
            res.status(200).json({message:"Record Fetched", teacher})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // updating a single record in DB
    update:async (req , res)=>{
        try {
            const teacherID = req.params.id;
            const payload= req.body;

            const teacher = await teacherModel.findByPk(teacherID);
            if(!teacher){
                console.log("Teacher not found")
                return res.status(404).json({ error: "Teacher not found" });
            }

            // await studentModel.update(
            //     { lastName: 'xyz' },
            //     {
            //       where: {
            //         lastName: null,
            //       },
            //     },
            //   );

            const teacherUpdate = await teacher.update(payload);
            await teacherUpdate.save();
            console.log({message:"Record Updated", teacherUpdate})
            res.status(200).json({message:"Record Updated", teacherUpdate})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // deleting a record in DB by ID
    delete:async (req , res)=>{
        try {
            const teacherID = req.params.id;

            const teacher = await teacherModel.findByPk(teacherID);
            if(!teacher){
                console.log("Teacher not found")
                return res.status(404).json({ error: "Teacher not found" });
            }

            // // //await studentModel.destroy({
            //         where:{
            //             firstName:'xyz',
            //         }
            // // });
            await teacher.destroy();
            console.log({message:"Record Deleted", teacher})
            res.status(200).json({message:"Record Deleted", teacher})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },
    
}

export default teacherController;