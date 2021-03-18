const {Sequelize} = require("sequelize");
const sequelize = require("../../config/database");

const UserType = require("../UserType");
const User = require("../User");
const UserActivity = require("../UserActivity");
const UserSettings = require("../UserSettings");
const Permissions = require("../Permissions");
const User_Permissions = require("../User_Permissions");
const Business = require("../Business");
const User_Business = require("../User_Business");
const UserType_Permissions = require("../UserType_Permissions");
const BusinessSettings = require("../BusinessSettings");
const CurrencyExchange = require("../CurrencyExchange");
const Subscription = require("../Subscription");
const Business_Subscription = require("../Business_Subscription");
const Accounting = require("../Accounting");
const Bank = require("../Bank");
const Buy = require("../Buy");
const BuyReturn = require("../BuyReturn");
const Cash = require("../Cash");
const Check = require("../Check");
const Product = require("../Product");
const ProductType = require("../ProductType");
const Product_Accounting = require("../Product_Accounting");
const Product_Buy = require("../Product_Buy");
const Product_BuyReturn = require("../Product_BuyReturn");
const Product_Sale = require("../Product_Sale");
const Product_SaleReturn = require("../Product_SaleReturn");
const Product_Waste = require("../Product_Waste");
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
const Seller = require("../Seller");
const Shareholder = require("../Shareholder");
const Store = require("../Store");
const StoreHandle = require("../StoreHandle");
const Transfer = require("../Transfer");
const Person = require("../Person");
const PersonType = require("../PersonType");
const Waste = require("../Waste");

module.exports = () => {
//  all relations user
//  one to many relationships: UserType & User
    UserType.hasMany(User);
    User.belongsTo(UserType);
//  one to many relationships: User & UserActivity
    User.hasMany(UserActivity);
    UserActivity.belongsTo(User);
//  one to many relationships: User & UserSettings
    User.hasMany(UserSettings);
    UserSettings.belongsTo(User);
//  super many to many relationships: User & Permissions
    User.belongsToMany(Permissions, {through: User_Permissions});
    Permissions.belongsToMany(User, {through: User_Permissions});
    User.hasMany(User_Permissions);
    User_Permissions.belongsTo(User);
    Permissions.hasMany(User_Permissions);
    User_Permissions.belongsTo(Permissions);
//  super many to many relationships: User & Business
    User.belongsToMany(Business, {through: User_Business});
    Business.belongsToMany(User, {through: User_Business});
    User.hasMany(User_Business);
    User_Business.belongsTo(User);
    Business.hasMany(User_Business);
    User_Business.belongsTo(Business);


//  super many to many relationships: UserType & Permissions
    UserType.belongsToMany(Permissions, {through: UserType_Permissions});
    Permissions.belongsToMany(UserType, {through: UserType_Permissions});
    UserType.hasMany(UserType_Permissions);
    UserType_Permissions.belongsTo(UserType);
    Permissions.hasMany(UserType_Permissions);
    UserType_Permissions.belongsTo(Permissions);

//  all relations Business
//  one to many relationships: Business & BusinessSettings
    Business.hasMany(BusinessSettings);
    BusinessSettings.belongsTo(Business);
//  one to many relationships: Business & CurrencyExchange
    Business.hasMany(CurrencyExchange);
    CurrencyExchange.belongsTo(Business);
//  one to many relationships: Business & UserActivity
    Business.hasMany(UserActivity);
    UserActivity.belongsTo(Business);
//  super many to many relationships: Business & Subscription
    Business.belongsToMany(Subscription, {through: Business_Subscription});
    Subscription.belongsToMany(Business, {through: Business_Subscription});
    Business.hasMany(Business_Subscription);
    Business_Subscription.belongsTo(Business);
    Subscription.hasMany(Business_Subscription);
    Business_Subscription.belongsTo(Subscription);


//  one to many relationships: PersonType & Person
    PersonType.hasMany(Person);
    Person.belongsTo(PersonType);
//  one to many relationships: Person & Check
    Person.hasMany(Check);
    Check.belongsTo(Person)
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
    Transfer.belongsTo(Bank, {foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(from): Salary(tankhah) & Transfer
    Salary.hasMany(Transfer, {
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    Transfer.belongsTo(Salary, {foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(from): Cash & Transfer
    Cash.hasMany(Transfer, {
        foreignKey: 'fromId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    Transfer.belongsTo(Cash, {foreignKey: 'fromId', constraints: false});
//  one to many polymorfics relationships(to): Bank & Transfer
    Bank.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    Transfer.belongsTo(Bank, {foreignKey: 'toId', constraints: false});
//  one to many polymorfics relationships(to): Salary(tankhah) & Transfer
    Salary.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    Transfer.belongsTo(Salary, {foreignKey: 'toId', constraints: false});
//  one to many polymorfics relationships(to): Cash & Transfer
    Cash.hasMany(Transfer, {
        foreignKey: 'toId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    Transfer.belongsTo(Cash, {foreignKey: 'toId', constraints: false});


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


//  all relations Seller
//  one to many relationships: Seller & Sale
    Seller.hasMany(Sale);
    Sale.belongsTo(Seller);
//  one to many relationships: Seller & SaleReturn
    Seller.hasMany(SaleReturn);
    SaleReturn.belongsTo(Seller);
//  one to many relationships: Seller & Buy
    Seller.hasMany(Buy);
    Buy.belongsTo(Seller);
//  one to many relationships: Seller & BuyReturn
    Seller.hasMany(BuyReturn);
    BuyReturn.belongsTo(Seller);


//  all relations ReceiveItem
//  one to many relationships polymorfics: Income(daramad) & ReceiveItem
    Income.hasMany(ReceiveItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'income'
        }
    });
    ReceiveItem.belongsTo(Income, {foreignKey: 'receivableId', constraints: false});
//  one to many relationships: Receive & ReceiveItem

    Receive.hasMany(ReceiveItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'receive'
        }
    });
    ReceiveItem.belongsTo(Receive, {foreignKey: 'receivableId', constraints: false});

//  one to many relationships: Bank & ReceiveItem
    Bank.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    ReceiveItem.belongsTo(Bank, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Salary & ReceiveItem
    Salary.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    ReceiveItem.belongsTo(Salary, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Cash & ReceiveItem
    Cash.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    ReceiveItem.belongsTo(Cash, {foreignKey: 'optionableId', constraints: false});

//  one to many relationships: Check & ReceiveItem
    Check.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'check'
        }
    });
    ReceiveItem.belongsTo(Check, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Person & ReceiveItem
    Person.hasMany(ReceiveItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'Person'
        }
    });
    ReceiveItem.belongsTo(Person, {foreignKey: 'optionableId', constraints: false});

//  all relations PaymentItem
//  one to many relationships: Expense(hazine) & ReceiveItem
    Expense.hasMany(PaymentItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'expense'
        }
    });
    PaymentItem.belongsTo(Expense, {foreignKey: 'paymentableId', constraints: false});
//  one to many relationships: Payment & ReceiveItem
    Payment.hasMany(PaymentItem, {
        foreignKey: 'receivableId',
        constraints: false,
        scope: {
            commentableType: 'payment'
        }
    });
    PaymentItem.belongsTo(Payment, {foreignKey: 'paymentableId', constraints: false});
//  one to many relationships: Bank & ReceiveItem
    Bank.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'bank'
        }
    });
    PaymentItem.belongsTo(Bank, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Salary & ReceiveItem
    Salary.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'salary'
        }
    });
    PaymentItem.belongsTo(Salary, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Cash & ReceiveItem
    Cash.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'cash'
        }
    });
    PaymentItem.belongsTo(Cash, {foreignKey: 'optionableId', constraints: false});

//  one to many relationships: Check & ReceiveItem
    Check.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'check'
        }
    });
    PaymentItem.belongsTo(Check, {foreignKey: 'optionableId', constraints: false});
//  one to many relationships: Person & ReceiveItem
    Person.hasMany(PaymentItem, {
        foreignKey: 'optionableId',
        constraints: false,
        scope: {
            commentableType: 'Person'
        }
    });
    PaymentItem.belongsTo(Person, {foreignKey: 'optionableId', constraints: false});

//  all relations Product (Commodity & Service)
//  one to many relationships: ProductType & Product
    ProductType.hasMany(Product);
    Product.belongsTo(ProductType);
//  super many to many relationships: Product & Sale
    Product.belongsToMany(Sale, {through: Product_Sale});
    Sale.belongsToMany(Product, {through: Product_Sale});
    Product.hasMany(Product_Sale);
    Product_Sale.belongsTo(Product);
    Sale.hasMany(Product_Sale);
    Product_Sale.belongsTo(Sale);
//  //  super many to many relationships: Product & SaleReturn
    Product.belongsToMany(SaleReturn, {through: Product_SaleReturn});
    SaleReturn.belongsToMany(Product, {through: Product_SaleReturn});
    Product.hasMany(Product_SaleReturn);
    Product_SaleReturn.belongsTo(Product);
    Sale.hasMany(Product_SaleReturn);
    Product_SaleReturn.belongsTo(Sale);
//  super many to many relationships: Product & Buy
    Product.belongsToMany(Buy, {through: Product_Buy});
    Buy.belongsToMany(Product, {through: Product_Buy});
    Product.hasMany(Product_Buy);
    Product_Buy.belongsTo(Product);
    Buy.hasMany(Product_Buy);
    Product_Buy.belongsTo(Buy);
//  super many to many relationships: Product & BuyReturn
    Product.belongsToMany(BuyReturn, {through: Product_BuyReturn});
    BuyReturn.belongsToMany(Product, {through: Product_BuyReturn});
    Product.hasMany(Product_BuyReturn);
    Product_BuyReturn.belongsTo(Product);
    BuyReturn.hasMany(Product_BuyReturn);
    Product_BuyReturn.belongsTo(BuyReturn);
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

