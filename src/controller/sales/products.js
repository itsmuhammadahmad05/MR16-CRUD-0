import ProductModel from "../../model/sales/products.js"

const productsController = {

    //creating record in DB
    create:async (req , res)=>{
        try {
            const payload= req.body;
            const productData= await ProductModel.create({
                productName:payload.productName,
                productStock:payload.productStock,
                price:payload.price,
            });
            res.status(200).json({message:"Data added successfully",productData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing complete record from DB
    getAll:async (req , res)=>{
        try {
            const productData= await ProductModel.findAll({
                
            });
            res.status(200).json({message:"Record Fetched",productData})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    //accessing a single record from DB
    getSingle:async (req , res)=>{
        try {
            const productID = req.params.id;
            const product= await ProductModel.findByPk(productID);
            if(!product){
                console.log("Invalid ID")
            }
            console.log({message:"Record Fetched", product})
            res.status(200).json({message:"Record Fetched", product})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // updating a single record in DB
    update:async (req , res)=>{
        try {
            const productID = req.params.id;
            const payload= req.body;

            const product = await ProductModel.findByPk(productID);
            if(!product){
                console.log("Product not found")
                return res.status(404).json({ error: "Product not found" });
            }

            // await ProductModel.update(
            //     { lastName: 'xyz' },
            //     {
            //       where: {
            //         lastName: null,
            //       },
            //     },
            //   );

            const productUpdate = await product.update(payload);
            await productUpdate.save();
            
            console.log({message:"Record Updated", productUpdate})
            res.status(200).json({message:"Record Updated", productUpdate})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

    // deleting a record in DB by ID
    delete:async (req , res)=>{
        try {
            const productID = req.params.id;

            const product = await ProductModel.findByPk(productID);
            if(!product){
                console.log("Invalid ID")
                return res.status(404).json({ error: "Record not found" });
            }

            // // //await productModel.destroy({
            //         where:{
            //             firstName:'xyz',
            //         }
            // // });
            await product.destroy();
            console.log({message:"Record Deleted", product})
            res.status(200).json({message:"Record Deleted", product})
        } 
        catch (error) {
            console.error("Error:", error);
            return res.status(404).json({error:"Internal Server Error"}); 
        }
    },

}

export default productsController;