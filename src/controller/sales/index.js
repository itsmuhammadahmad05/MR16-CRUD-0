import SalesModel from "../../model/sales/index.js";
import ProductModel from "../../model/sales/products.js";
import SaleProductModel from "../../model/sales/saleProducts.js";


const SalesController = {
getAll: async (req, res) => {
    try {
    const sales = await SalesModel.findAll({
        order: [["createdAt", "DESC"]],
        limit: 5,
    });
    res.json({
        data: sales,
    });
    } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    }
},
getSingle: async (req, res) => {
    try {
    const { id } = req.params;

    const sale = await SalesModel.findByPk(id, {
        include: [{
            model : SaleProductModel,
            include:[ProductModel]
        }]
    });

    if (!sale) {
        return res.status(404).json({ message: "No sale with this ID" });
    }
    res.status(200).json({ data: sale });
    } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error", error });
    }
},
create: async (req, res) => {
    try {
    const payload = req.body;
    let totalAmount = payload.totalAmount;

    const sale = new SalesModel();
    sale.totalAmount = totalAmount
    await sale.save();

    const salesProducts = payload.salesProducts.map((ele) => {
        return {
        ...ele,
        SaleId: sale.id,
        }; 
    });
    const saleProduct = await SaleProductModel.bulkCreate(salesProducts);

    res.status(200).json({ message: "sale created", saleProduct });
    } 
    catch (error) {
    console.log("Error",error);
    res.status(500).json({ message: "Internal server error" });
    }
},

update:async (req , res)=>{
    try {
        const {id} = req.params;
        const payload= req.body;

        const sale = await SalesModel.findByPk(id, {
            include:[SaleProductModel]
        });
        if(!sale){
            console.log("Record not found")
            return res.status(404).json({ error: "Record not found" });
        }

        // await SalesModel.update(
        //     { lastName: 'xyz' },
        //     {
        //       where: {
        //         lastName: null,
        //       },
        //     },
        //   );

        const saleUpdate = await sale.update(payload);
        await saleUpdate.save();

        console.log({message:"Record Updated", saleUpdate})
        res.status(200).json({message:"Record Updated", saleUpdate})
    } 
    catch (error) {
        console.error("Error:", error);
        return res.status(404).json({error:"Internal Server Error"}); 
    }
},

delete:async (req , res)=>{
    try {
        const saleID = req.params.id;

        const sale = await SalesModel.findByPk(saleID, {
            include:[SaleProductModel]
        });
        if(!sale){
            console.log("Record not found")
            return res.status(404).json({ error: "Record not found" });
        }

        // // //await SalesModel.destroy({
        //         where:{
        //             productName:'xyz',
        //         }
        // // });
        await sale.destroy();
        console.log({message:"Record Deleted", sale})
        res.status(200).json({message:"Record Deleted", sale})
    } 
    catch (error) {
        console.error("Error:", error);
        return res.status(404).json({error:"Internal Server Error"}); 
    }
},
};

export default SalesController;
