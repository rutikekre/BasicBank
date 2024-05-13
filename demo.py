# Coneect to JSON file and print the data
import json
def get_customer_data(customer_id):
    with open("static/data.json") as f:
        data = json.load(f)
    return data['customers']['data'][customer_id]

