const {Sequelize} = require("sequelize");
const sequelize = require("../../config/database");

const Accounting = require("../Accounting");
const Bank = require("../Bank");
const Buy = require("../Buy");
const BuyReturn = require("../BuyReturn");
const Cash = require("../Cash");
const Check = require("../Check");
const Product = require("../Product");
const ProductType = require("../ProductType");
const ProductAccounting = require("../ProductAccounting");
const ProductBuy = require("../ProductBuy");
const ProductBuyReturn = require("../ProductBuyReturn");
const ProductSale = require("../ProductSale");
const ProductSaleReturn = require("../ProductSaleReturn");
const ProductWaste = require("../ProductWaste");
const Expense = require("../Expense");
const Income = require("../Income");
const Payment = require("../Payment");
const PaymentItem = require("../PaymentItem");
const Project = require("../Project");
const Receive = require("../Receive");
const ReceiveItem = require("../ReceiveItem");
const Salary = require("../Salary");
const Sale = require("../Sale");
const SaleReturn = require("../SaleReturn");
const Saller = require("../Saller");
const Shareholder = require("../Shareholder");
const Store = require("../Store");
const StoreHandle = require("../StoreHandle");
const Transfer = require("../Transfer");
const User = require("../User");
const UserType = require("../UserType");
const Waste = require("../Waste");

module.exports = () => {
//  one to many relationships: UserType & User
    UserType.hasMany(User);
    User.belongsTo(UserType);
//  one to many relationships: User & Check
    User.hasMany(Check);
    Check.belongsTo(User)
//  one to many relationships: Bank & Check
    Bank.hasMany(Check);
    Check.belongsTo(Bank);
//  one to many relationships: Check & Project
    Project.hasMany(Check);
    Check.belongsTo(Project)


//  all transfer polymorfics relation
//  one to many polymorfics relationships(from): Bank & Transfer
    Bank.hasMany(Transfer, {
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    Transfer.belongsTo(Bank, { foreignKey: 'fromId', constraints: false });
//  one to many polymorfics relationships(from): Salary(tankhah) & Transfer
    Salary.hasMany(Transfer, {
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    Transfer.belongsTo(Salary, { foreignKey: 'fromId', constraints: false });
//  one to many polymorfics relationships(from): Cash & Transfer
    Cash.hasMany(Transfer, {
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    Transfer.belongsTo(Cash, { foreignKey: 'fromId', constraints: false });
//  one to many polymorfics relationships(to): Bank & Transfer
    Bank.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    Transfer.belongsTo(Bank, { foreignKey: 'toId', constraints: false });
//  one to many polymorfics relationships(to): Salary(tankhah) & Transfer
    Salary.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    Transfer.belongsTo(Salary, { foreignKey: 'toId', constraints: false });
//  one to many polymorfics relationships(to): Cash & Transfer
    Cash.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    Transfer.belongsTo(Cash, { foreignKey: 'toId', constraints: false });



//  all relations Project
//  one to many relationships: Project & Income
    Project.hasMany(Income);
    Income.belongsTo(Project);
//  one to many relationships: Project & Payment
    Project.hasMany(Payment);
    Payment.belongsTo(Project);
//  one to many relationships: Project & Receive
    Project.hasMany(Receive);
    Receive.belongsTo(Project);
//  one to many relationships: Project & Payment
    Project.hasMany(Payment);
    Payment.belongsTo(Project);
//  one to many relationships: Project & Transfer
    Project.hasMany(Transfer);
    Transfer.belongsTo(Project);
//  one to many relationships: Project & Sale
    Project.hasMany(Sale);
    Sale.belongsTo(Project);
//  one to many relationships: Project & SaleReturn
    Project.hasMany(SaleReturn);
    SaleReturn.belongsTo(Project);
//  one to many relationships: Project & Buy
    Project.hasMany(Buy);
    Buy.belongsTo(Project);
//  one to many relationships: Project & BuyReturn
    Project.hasMany(BuyReturn);
    BuyReturn.belongsTo(Project);
//  one to many relationships: Project & Waste(zayeat)
    Project.hasMany(Waste);
    Waste.belongsTo(Project);
//  one to many relationships: Project & Accounting
    Project.hasMany(Accounting);
    Accounting.belongsTo(Project);


//  all relations Store
//  one to many relationships: StoreHandle & Store
    Store.hasMany(StoreHandle);
    StoreHandle.belongsTo(Store);
//  one to many relationships: Store & Transfer
    Store.hasMany(Transfer);
    Transfer.belongsTo(Store);
//  one to many relationships: Store & Sale
    Store.hasMany(Sale);
    Sale.belongsTo(Store);
//  one to many relationships: Store & SaleReturn
    Store.hasMany(SaleReturn);
    SaleReturn.belongsTo(Store);
//  one to many relationships: Store & Buy
    Store.hasMany(Buy);
    Buy.belongsTo(Store);
//  one to many relationships: Store & BuyReturn
    Store.hasMany(BuyReturn);
    BuyReturn.belongsTo(Store);


//  all relations Saller
//  one to many relationships: Saller & Sale
    Saller.hasMany(Sale);
    Sale.belongsTo(Saller);
//  one to many relationships: Saller & SaleReturn
    Saller.hasMany(SaleReturn);
    SaleReturn.belongsTo(Saller);
//  one to many relationships: Saller & Buy
    Saller.hasMany(Buy);
    Buy.belongsTo(Saller);
//  one to many relationships: Saller & BuyReturn
    Saller.hasMany(BuyReturn);
    BuyReturn.belongsTo(Saller);



//  all relations ReceiveItem
//  one to many relationships polymorfics: Income(daramad) & ReceiveItem
    Income.hasMany(ReceiveItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'income'
        }
    });
    ReceiveItem.belongsTo(Income, { foreignKey: 'receivableId', constraints: false });
//  one to many relationships: Receive & ReceiveItem

    Receive.hasMany(ReceiveItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'receive'
        }
    });
    ReceiveItem.belongsTo(Receive, { foreignKey: 'receivableId', constraints: false });

//  one to many relationships: Bank & ReceiveItem
    Bank.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    ReceiveItem.belongsTo(Bank, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: Salary & ReceiveItem
    Salary.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    ReceiveItem.belongsTo(Salary, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: Cash & ReceiveItem
    Cash.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    ReceiveItem.belongsTo(Cash, { foreignKey: 'optionableId', constraints: false });

//  one to many relationships: Check & ReceiveItem
    Check.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'check'
        }
    });
    ReceiveItem.belongsTo(Check, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: User & ReceiveItem
    User.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'user'
        }
    });
    ReceiveItem.belongsTo(User, { foreignKey: 'optionableId', constraints: false });

//  all relations PaymentItem
//  one to many relationships: Expense(hazine) & ReceiveItem
    Expense.hasMany(PaymentItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'expense'
        }
    });
    PaymentItem.belongsTo(Expense, { foreignKey: 'paymentableId', constraints: false });
//  one to many relationships: Payment & ReceiveItem
    Payment.hasMany(PaymentItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'payment'
        }
    });
    PaymentItem.belongsTo(Payment, { foreignKey: 'paymentableId', constraints: false });
//  one to many relationships: Bank & ReceiveItem
    Bank.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    PaymentItem.belongsTo(Bank, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: Salary & ReceiveItem
    Salary.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    PaymentItem.belongsTo(Salary, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: Cash & ReceiveItem
    Cash.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    PaymentItem.belongsTo(Cash, { foreignKey: 'optionableId', constraints: false });

//  one to many relationships: Check & ReceiveItem
    Check.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'check'
        }
    });
    PaymentItem.belongsTo(Check, { foreignKey: 'optionableId', constraints: false });
//  one to many relationships: User & ReceiveItem
    User.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'user'
        }
    });
    PaymentItem.belongsTo(User, { foreignKey: 'optionableId', constraints: false });

//  all relations Product (Commodity & Service)
//  one to many relationships: ProductType & Product
    ProductType.hasMany(Product);
    Product.belongsTo(ProductType);
//  super many to many relationships: Product & Sale
    Product.belongsToMany(Sale, { through: ProductSale });
    Sale.belongsToMany(Product, { through: ProductSale });
    Product.hasMany(ProductSale);
    ProductSale.belongsTo(Product);
    Sale.hasMany(ProductSale);
    ProductSale.belongsTo(Sale);
//  //  super many to many relationships: Product & SaleReturn
    Product.belongsToMany(SaleReturn, { through: ProductSaleReturn });
    SaleReturn.belongsToMany(Product, { through: ProductSaleReturn });
    Product.hasMany(ProductSaleReturn);
    ProductSaleReturn.belongsTo(Product);
    Sale.hasMany(ProductSaleReturn);
    ProductSaleReturn.belongsTo(Sale);
//  super many to many relationships: Product & Buy
    Product.belongsToMany(Buy, { through: ProductBuy });
    Buy.belongsToMany(Product, { through: ProductBuy });
    Product.hasMany(ProductBuy);
    ProductBuy.belongsTo(Product);
    Buy.hasMany(ProductBuy);
    ProductBuy.belongsTo(Buy);
//  super many to many relationships: Product & BuyReturn
    Product.belongsToMany(BuyReturn, { through: ProductBuyReturn });
    BuyReturn.belongsToMany(Product, { through: ProductBuyReturn });
    Product.hasMany(ProductBuyReturn);
    ProductBuyReturn.belongsTo(Product);
    BuyReturn.hasMany(ProductBuyReturn);
    ProductBuyReturn.belongsTo(BuyReturn);
//  super many to many relationships: Product & Waste
    Product.belongsToMany(Waste, { through: ProductWaste });
    Waste.belongsToMany(Product, { through: ProductWaste });
    Product.hasMany(ProductWaste);
    ProductWaste.belongsTo(Product);
    Waste.hasMany(ProductWaste);
    ProductWaste.belongsTo(Waste);
//  super many to many relationships: Product & Accounting
    Product.belongsToMany(Accounting, { through: ProductAccounting });
    Accounting.belongsToMany(Product, { through: ProductAccounting });
    Product.hasMany(ProductAccounting);
    ProductAccounting.belongsTo(Product);
    Accounting.hasMany(ProductAccounting);
    ProductAccounting.belongsTo(Accounting);
}

