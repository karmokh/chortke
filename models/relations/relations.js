const {Sequelize} = require("sequelize");
const sequelize = require("../../config/database");

const Role = require("../Role");
const User = require("../User");
const User_Activity = require("../User_Activity");
const User_Settings = require("../User_Settings");
const Permission = require("../Permission");
const User_Permission = require("../User_Permission");
const Business = require("../Business");
const User_Business = require("../User_Business");
const Role_Permission = require("../Role_Permission");
const Business_Settings = require("../Business_Settings");
const Currency = require("../Currency");
const Currency_Exchange = require("../Currency_Exchange");
const Subscription = require("../Subscription");
const Subscription_Feature = require("../Subscription_Feature");
const Business_Subscription = require("../Business_Subscription");
const Accounting = require("../Accounting");
const Bank = require("../Bank");
const Buy = require("../Buy");
const Buy_Return = require("../Buy_Return");
const Cashier = require("../Cashier");
const Cheque = require("../Cheque");
const Product = require("../Product");
const Product_Settings = require("../Product_Settings");
const Category = require("../Category");
const Product_Accounting = require("../Product_Accounting");
const Product_Buy = require("../Product_Buy");
const Product_Buy_Return = require("../Product_Buy_Return");
const Product_Sale = require("../Product_Sale");
const Product_Sale_Return = require("../Product_Sale_Return");
const Product_Waste = require("../Product_Waste");
const Cost = require("../Cost");
const Income = require("../Income");
const Payment = require("../Payment");
const Payment_Item = require("../Payment_Item");
const Project = require("../Project");
const Receive = require("../Receive");
const Receive_Item = require("../Receive_Item");
const Fund = require("../Fund");
const Sale = require("../Sale");
const Sale_Return = require("../Sale_Return");
const Seller = require("../Seller");
const Shareholder = require("../Shareholder");
const Warehouse = require("../Warehouse");
const WarehouseHandle = require("../WarehouseHandle");
const Transfer = require("../Transfer");
const Person = require("../Person");
const PersonSettings = require("../Person_Setting");
const Person_Type = require("../Person_Type");
const Waste = require("../Waste");

module.exports = () => {
//  all relations user
//  one to many relationships: Role & User
    Role.hasMany(User);
    User.belongsTo(Role);
//  one to many relationships: User & User_Activity
    User.hasMany(User_Activity);
    User_Activity.belongsTo(User);
//  one to many relationships: User & User_Settings
    User.hasMany(User_Settings);
    User_Settings.belongsTo(User);
//  super many to many relationships: User & Permission
    User.belongsToMany(Permission, {through: User_Permission});
    Permission.belongsToMany(User, {through: User_Permission});
    User.hasMany(User_Permission);
    User_Permission.belongsTo(User);
    Permission.hasMany(User_Permission);
    User_Permission.belongsTo(Permission);
//  super many to many relationships: User & Business
    User.belongsToMany(Business, {through: User_Business});
    Business.belongsToMany(User, {through: User_Business});
    User.hasMany(User_Business);
    User_Business.belongsTo(User);
    Business.hasMany(User_Business);
    User_Business.belongsTo(Business);


//  super many to many relationships: Role & Permission
    Role.belongsToMany(Permission, {through: Role_Permission});
    Permission.belongsToMany(Role, {through: Role_Permission});
    Role.hasMany(Role_Permission);
    Role_Permission.belongsTo(Role);
    Permission.hasMany(Role_Permission);
    Role_Permission.belongsTo(Permission);

//  all relations Business
//  one to many relationships: Business & Business_Settings
    Business.hasMany(Business_Settings);
    Business_Settings.belongsTo(Business);
//  one to many relationships: Currency & Currency_Exchange
    Currency.hasMany(Currency_Exchange, {as: 'FromExchanges', foreignKey: 'fromId'});
    Currency_Exchange.belongsTo(Currency, {as: 'FromCurrency', foreignKey: 'fromId'});
    Currency.hasMany(Currency_Exchange, {as: 'ToExchanges', foreignKey: 'toId'});
    Currency_Exchange.belongsTo(Currency, {as: 'ToCurrency', foreignKey: 'toId'});
//  one to many relationships: Business & Currency_Exchange
    Business.hasMany(Currency_Exchange);
    Currency_Exchange.belongsTo(Business);
//  one to many relationships: Business & User_Activity
    Business.hasMany(User_Activity);
    User_Activity.belongsTo(Business);
//  one to many relationships: Subscription & Subscription_Feature
    Subscription.hasMany(Subscription_Feature);
    Subscription_Feature.belongsTo(Subscription);
//  super many to many relationships: Business & Subscription
    Business.belongsToMany(Subscription, {through: Business_Subscription});
    Subscription.belongsToMany(Business, {through: Business_Subscription});
    Business.hasMany(Business_Subscription);
    Business_Subscription.belongsTo(Business);
    Subscription.hasMany(Business_Subscription);
    Business_Subscription.belongsTo(Subscription);
//  all relation Business with all table Business
//  one to many relationships: Business & Bank
    Business.hasMany(Bank);
    Bank.belongsTo(Business);
//  one to many relationships: Business & Fund
    Business.hasMany(Fund);
    Fund.belongsTo(Business);
//  one to many relationships: Business & Cashier
    Business.hasMany(Cashier);
    Cashier.belongsTo(Business);
//  one to many relationships: Business & Cheque
    Business.hasMany(Cheque);
    Cheque.belongsTo(Business);
//  one to many relationships: Business & Person
    Business.hasMany(Person);
    Person.belongsTo(Business);
//  one to many relationships: Person & PersonSettings
    Person.hasMany(PersonSettings);
    PersonSettings.belongsTo(Person);
//  one to many relationships: Business & Project
    Business.hasMany(Project);
    Project.belongsTo(Business);
//  one to many relationships: Business & Warehouse
    Business.hasMany(Warehouse);
    Warehouse.belongsTo(Business);
//  one to many relationships: Business & Seller
    Business.hasMany(Seller);
    Seller.belongsTo(Business);
//  one to many relationships: Business & Product
    Business.hasMany(Product);
    Product.belongsTo(Business);
//  one to many relationships: Business & Income
    Business.hasMany(Income);
    Income.belongsTo(Business);
//  one to many relationships: Business & Cost
    Business.hasMany(Cost);
    Cost.belongsTo(Business);
//  one to many relationships: Business & Receive
    Business.hasMany(Receive);
    Receive.belongsTo(Business);
//  one to many relationships: Business & Payment
    Business.hasMany(Payment);
    Payment.belongsTo(Business);
//  one to many relationships: Business & Transfer
    Business.hasMany(Transfer);
    Transfer.belongsTo(Business);
//  one to many relationships: Business & Sale
    Business.hasMany(Sale);
    Sale.belongsTo(Business);
//  one to many relationships: Business & Sale_Return
    Business.hasMany(Sale_Return);
    Sale_Return.belongsTo(Business);
//  one to many relationships: Business & Buy
    Business.hasMany(Buy);
    Buy.belongsTo(Business);
//  one to many relationships: Business & Buy_Return
    Business.hasMany(Buy_Return);
    Buy_Return.belongsTo(Business);
//  one to many relationships: Business & Waste
    Business.hasMany(Waste);
    Waste.belongsTo(Business);
//  one to many relationships: Business & Accounting
    Business.hasMany(Accounting);
    Accounting.belongsTo(Business);
//  one to many relationships: Business & Cashier


//  one to many relationships: Person_Type & Person
    Person_Type.hasMany(Person);
    Person.belongsTo(Person_Type);
//  one to many relationships: Person_Type & PersonType
    Person_Type.hasMany(Person_Type, {as: 'Childs', foreignKey: 'parentId'});
    Person_Type.belongsTo(Person_Type, {as: 'Parent', foreignKey: 'parentId'});
//  one to many relationships: Person & Cheque
    Person.hasMany(Cheque);
    Cheque.belongsTo(Person)
//  one to many relationships: Bank & Cheque
    Bank.hasMany(Cheque);
    Cheque.belongsTo(Bank);
//  one to many relationships: Cheque & Project
    Project.hasMany(Cheque);
    Cheque.belongsTo(Project)


//  all transfer polymorfics relation
//  one to many polymorfics relationships(from): Bank & Transfer
    Bank.hasMany(Transfer, {
        as: 'fromBank',
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            fromType: 'Bank'
        }
    });
    Transfer.belongsTo(Bank, {as: 'fromBankBelong', foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(from): Fund(tankhah) & Transfer
    Fund.hasMany(Transfer, {
        as: 'fromFund',
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            fromType: 'Fund'
        }
    });
    Transfer.belongsTo(Fund, {as: 'fromFundBelong', foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(from): Cashier & Transfer
    Cashier.hasMany(Transfer, {
        as: 'fromCashier',
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            fromType: 'Cashier'
        }
    });
    Transfer.belongsTo(Cashier, {as: 'fromCashierBelong', foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(to): Bank & Transfer
    Bank.hasMany(Transfer, {
        as: 'toBank',
        foreignKey: 'toId',
        constraints: false,
        scope: {
            toType: 'Bank'
        }
    });
    Transfer.belongsTo(Bank, {as: 'toBankBelong', foreignKey: 'toId', constraints: false});
//  one to many polymorfics relationships(to): Fund(tankhah) & Transfer
    Fund.hasMany(Transfer, {
        as: 'toFund',
        foreignKey: 'toId',
        constraints: false,
        scope: {
            toType: 'Fund'
        }
    });
    Transfer.belongsTo(Fund, {as: 'toFundBelong', foreignKey: 'toId', constraints: false});
//  one to many polymorfics relationships(to): Cashier & Transfer
    Cashier.hasMany(Transfer, {
        as: 'toCashier',
        foreignKey: 'toId',
        constraints: false,
        scope: {
            toType: 'Cashier'
        }
    });
    Transfer.belongsTo(Cashier, {as: 'toCashierBelong', foreignKey: 'toId', constraints: false});


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
//  one to many relationships: Project & Sale_Return
    Project.hasMany(Sale_Return);
    Sale_Return.belongsTo(Project);
//  one to many relationships: Project & Buy
    Project.hasMany(Buy);
    Buy.belongsTo(Project);
//  one to many relationships: Project & Buy_Return
    Project.hasMany(Buy_Return);
    Buy_Return.belongsTo(Project);
//  one to many relationships: Project & Waste(zayeat)
    Project.hasMany(Waste);
    Waste.belongsTo(Project);
//  one to many relationships: Project & Accounting
    Project.hasMany(Accounting);
    Accounting.belongsTo(Project);


//  all relations Warehouse
//  one to many relationships: WarehouseHandle & Warehouse
    Warehouse.hasMany(WarehouseHandle);
    WarehouseHandle.belongsTo(Warehouse);
//  one to many relationships: Warehouse & Transfer
    Warehouse.hasMany(Transfer);
    Transfer.belongsTo(Warehouse);
//  one to many relationships: Warehouse & Sale
    Warehouse.hasMany(Sale);
    Sale.belongsTo(Warehouse);
//  one to many relationships: Warehouse & Sale_Return
    Warehouse.hasMany(Sale_Return);
    Sale_Return.belongsTo(Warehouse);
//  one to many relationships: Warehouse & Buy
    Warehouse.hasMany(Buy);
    Buy.belongsTo(Warehouse);
//  one to many relationships: Warehouse & Buy_Return
    Warehouse.hasMany(Buy_Return);
    Buy_Return.belongsTo(Warehouse);


//  all relations Seller
//  one to many relationships: Seller & Sale
    Seller.hasMany(Sale);
    Sale.belongsTo(Seller);
//  one to many relationships: Seller & Sale_Return
    Seller.hasMany(Sale_Return);
    Sale_Return.belongsTo(Seller);
//  one to many relationships: Seller & Buy
    Seller.hasMany(Buy);
    Buy.belongsTo(Seller);
//  one to many relationships: Seller & Buy_Return
    Seller.hasMany(Buy_Return);
    Buy_Return.belongsTo(Seller);


//  all relations Receive_Item
//  one to many relationships polymorfics: Income(daramad) & Receive_Item
    Income.hasMany(Receive_Item, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            receivableType: 'income'
        }
    });
    Receive_Item.belongsTo(Income, {foreignKey: 'receivableId', constraints: false});
//  one to many relationships: Receive & Receive_Item

    Receive.hasMany(Receive_Item, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            receivableType: 'receive'
        }
    });
    Receive_Item.belongsTo(Receive, {foreignKey: 'receivableId', constraints: false});

//  one to many relationships: Bank & Receive_Item
    Bank.hasMany(Receive_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'bank'
        }
    });
    Receive_Item.belongsTo(Bank, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Fund & Receive_Item
    Fund.hasMany(Receive_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Fund'
        }
    });
    Receive_Item.belongsTo(Fund, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Cashier & Receive_Item
    Cashier.hasMany(Receive_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'cashier'
        }
    });
    Receive_Item.belongsTo(Cashier, {foreignKey: 'optionableId', constraints: false});

//  one to many relationships: Cheque & Receive_Item
    Cheque.hasMany(Receive_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Cheque'
        }
    });
    Receive_Item.belongsTo(Cheque, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Person & Receive_Item
    Person.hasMany(Receive_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Person'
        }
    });
    Receive_Item.belongsTo(Person, {foreignKey: 'optionableId', constraints: false});

//  all relations Payment_Item
//  one to many relationships: Cost(hazine) & Receive_Item
    Cost.hasMany(Payment_Item, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            paymentableType: 'cost'
        }
    });
    Payment_Item.belongsTo(Cost, {foreignKey: 'paymentableId', constraints: false});
//  one to many relationships: Payment & Receive_Item
    Payment.hasMany(Payment_Item, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            paymentableType: 'payment'
        }
    });
    Payment_Item.belongsTo(Payment, {foreignKey: 'paymentableId', constraints: false});
//  one to many relationships: Bank & Receive_Item
    Bank.hasMany(Payment_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'bank'
        }
    });
    Payment_Item.belongsTo(Bank, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Fund & Receive_Item
    Fund.hasMany(Payment_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Fund'
        }
    });
    Payment_Item.belongsTo(Fund, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Cashier & Receive_Item
    Cashier.hasMany(Payment_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Cashier'
        }
    });
    Payment_Item.belongsTo(Cashier, {foreignKey: 'optionableId', constraints: false});

//  one to many relationships: Cheque & Receive_Item
    Cheque.hasMany(Payment_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Cheque'
        }
    });
    Payment_Item.belongsTo(Cheque, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Person & Receive_Item
    Person.hasMany(Payment_Item, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            optionableType: 'Person'
        }
    });
    Payment_Item.belongsTo(Person, {foreignKey: 'optionableId', constraints: false});

//  all relations Product (Commodity & Service)
//  one to many relationships: Category & Category
    Category.hasMany(Category, {as: 'Childs', foreignKey: 'parentId'});
    Category.belongsTo(Category, {as: 'Parent', foreignKey: 'parentId'});
//  one to many relationships: Category & Product
    Category.hasMany(Product);
    Product.belongsTo(Category);
//  one to many relationships: Product & Product_Settings
    Product.hasMany(Product_Settings);
    Product_Settings.belongsTo(Product);
//  super many to many relationships: Product & Sale
    Product.belongsToMany(Sale, {through: Product_Sale});
    Sale.belongsToMany(Product, {through: Product_Sale});
    Product.hasMany(Product_Sale);
    Product_Sale.belongsTo(Product);
    Sale.hasMany(Product_Sale);
    Product_Sale.belongsTo(Sale);
//  //  super many to many relationships: Product & Sale_Return
    Product.belongsToMany(Sale_Return, {through: Product_Sale_Return});
    Sale_Return.belongsToMany(Product, {through: Product_Sale_Return});
    Product.hasMany(Product_Sale_Return);
    Product_Sale_Return.belongsTo(Product);
    Sale.hasMany(Product_Sale_Return);
    Product_Sale_Return.belongsTo(Sale);
//  super many to many relationships: Product & Buy
    Product.belongsToMany(Buy, {through: Product_Buy});
    Buy.belongsToMany(Product, {through: Product_Buy});
    Product.hasMany(Product_Buy);
    Product_Buy.belongsTo(Product);
    Buy.hasMany(Product_Buy);
    Product_Buy.belongsTo(Buy);
//  super many to many relationships: Product & Buy_Return
    Product.belongsToMany(Buy_Return, {through: Product_Buy_Return});
    Buy_Return.belongsToMany(Product, {through: Product_Buy_Return});
    Product.hasMany(Product_Buy_Return);
    Product_Buy_Return.belongsTo(Product);
    Buy_Return.hasMany(Product_Buy_Return);
    Product_Buy_Return.belongsTo(Buy_Return);
//  super many to many relationships: Product & Waste
    Product.belongsToMany(Waste, {through: Product_Waste});
    Waste.belongsToMany(Product, {through: Product_Waste});
    Product.hasMany(Product_Waste);
    Product_Waste.belongsTo(Product);
    Waste.hasMany(Product_Waste);
    Product_Waste.belongsTo(Waste);
//  super many to many relationships: Product & Accounting
    Product.belongsToMany(Accounting, {through: Product_Accounting});
    Accounting.belongsToMany(Product, {through: Product_Accounting});
    Product.hasMany(Product_Accounting);
    Product_Accounting.belongsTo(Product);
    Accounting.hasMany(Product_Accounting);
    Product_Accounting.belongsTo(Accounting);
}

