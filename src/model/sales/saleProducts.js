    import { DataTypes } from "sequelize";
    import sequelize from "../../db/config.js";
    import SalesModel from "./index.js";
    import ProductModel from "./products.js";

    const SaleProductModel = sequelize.define(
    "SaleProduct",
    {
        productQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        rate: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        },
    },
    {
        timestamps:false
    }
    );

    SalesModel.hasMany(SaleProductModel);
    SaleProductModel.belongsTo(SalesModel);

    ProductModel.hasMany(SaleProductModel);
    SaleProductModel.belongsTo(ProductModel);

    export default SaleProductModel;

    // child model