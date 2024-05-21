import SalesModel from "../model/sales/index.js";
import SaleProductModel from "../model/sales/saleProducts.js"
import ProductModel from "../model/sales/products.js";
import marksModel from "../model/marks/index.js";
import studentModel from "../model/student/index.js";
import teacherModel from "../model/teacher/index.js";


const syncDB= async () =>{

    await studentModel.sync({alter:true, force: false});
    await teacherModel.sync({alter:true, force: false});
    await marksModel.sync({alter:true, force: false});
    await SalesModel.sync({alter:true, force: false});
    await ProductModel.sync({alter:true, force: false});
    await SaleProductModel.sync({alter:true, force: false});
};

export default syncDB;