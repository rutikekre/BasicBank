import pymongo as pm 

# Connect to MongoDB
client = pm.MongoClient("mongodb+srv://ankushmulewar51:OtFoH1q1aSUDYlW0@bankapplication.dru7scb.mongodb.net/?retryWrites=true&w=majority&appName=BankApplication")

database_name = 'bank'
db = client[database_name]


def getAllCustomers():
    cursor = db["customers"].find()
    return cursor

def getCustomerData(customer_id):
    cursor = db["customers"].find({"customer_id": customer_id})
    for document in cursor:
        return document


def checkBalance(account_number):
    cursor = db["customers"].find({"account_number": account_number})
    for document in cursor:
        return document["account_balance"]
    

def debitMoney(account_number, amount):
    db["customers"].update_one({"account_number": account_number}, {"$inc": {"account_balance": -amount}})


def creditMoney(account_number, amount):
    db["customers"].update_one({"account_number": account_number}, {"$inc": {"account_balance": amount}})


# print(1,checkBalance('1000001'))
# print(2,checkBalance('1000002'))

# debitMoney('1000001', 1000)
# creditMoney("1000002", 1000)

# print(1,checkBalance('1000001'))
# print(2,checkBalance('1000002'))
