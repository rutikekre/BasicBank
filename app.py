from flask import Flask, render_template, redirect , request, url_for, session, jsonify
import model


app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'



@app.route('/customer')
def customer(customer_id=0):
    transaction_status = session.get('transaction_status', 0)
  
    # setting session of transaction to 0 so that when nexr time page is loaded it does not show alert
    session['transaction_status'] = 0

    if request.method == 'GET':
        customer_id = int(request.args.get('customer_id'))
        # data = demo.get_customer_data(customer_id-1)
        data = model.getCustomerData(customer_id)

        if data == None:
            return redirect(url_for('index'))
        else:
            return render_template('customer.html', data = [data, transaction_status])        
    
    else:
        return redirect(url_for('index'))



@app.route('/transferMoney', methods=['POST'])
def transferMoney():
    customer_id = 0
    transaction_status = 0

    if request.method == 'POST':
        recipient_name = request.form['recipient_name']
        
        
        customer_id = int(request.form['customer_id'])
        
        sender_account_number = request.form['account_number']
        recipient_account_number = request.form['recipient_account_number']
        amount = float(request.form['amount'])

       
        try :        
            note = request.form['note']
            transaction_type = request.form['transaction_type']
        except:
            note = "Transfer money"
            transaction_type = "IMPS"

        account_balance = model.checkBalance(sender_account_number);

        if amount <= 0:
            # invalid amount specified
            transaction_status = 5
            session['transaction_status'] = transaction_status
            return redirect(url_for('customer',customer_id = str(customer_id)))
    

        if(account_balance >= amount):
            try:
                model.debitMoney(sender_account_number, amount)
            except:
                # something went wrong
                transaction_status = 4
            else:
                try:
                    model.creditMoney(recipient_account_number, amount)
                except:
                    # recipient account number is invalid
                    transaction_status = 3
                else:
                    # succesdfull transfer
                    session['last_success_transaction_amount'] = amount
                    session['last_success_account_transfer_no'] = recipient_account_number
                    transaction_status = 1
                    print("successfully transfered")
            finally:
                pass
        
        else:
            # insufficient balance
            transaction_status = 2 
            pass

        session['transaction_status'] = transaction_status
        return redirect(url_for('customer',customer_id = str(customer_id)))
    
    else:
        return redirect(url_for('index'))


@app.route('/')
def index():
    data = model.getAllCustomers()
    return render_template('index.html',data = data)


if __name__ == '__main__':
    app.run(debug=True)
