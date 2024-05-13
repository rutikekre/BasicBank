var data = '';

async function read_json() {
    try {
        const response = await fetch('static/data.json');
        const res = await response.json();
        data = res;
        return res
        // console.log(data); // You can access data here
    } catch (error) {
        console.error('Error reading JSON:', error);
    }
}





// Call the function
read_json().then(response => {
    len = response["customers"]["data"].length;

    for (i = 0; i < len; i++) {
        account_balance = response["customers"]["data"][i]["account_balance"];
        account_number = response["customers"]["data"][i]["account_number"];
        account_status = response["customers"]["data"][i]["account_status"];
        account_type = response["customers"]["data"][i]["account_type"];
        address = response["customers"]["data"][i]["address"];
        branch_id = response["customers"]["data"][i]["branch_id"];
        city = response["customers"]["data"][i]["city"];
        country = response["customers"]["data"][i]["country"];
        customer_id = response["customers"]["data"][i]["customer_id"];
        date_account_opened = response["customers"]["data"][i]["date_account_opened"];
        date_of_birth = response["customers"]["data"][i]["date_of_birth"];
        email = response["customers"]["data"][i]["email"];
        employee_id = response["customers"]["data"][i]["employee_id"];
        first_name = response["customers"]["data"][i]["first_name"];
        gender = response["customers"]["data"][i]["gender"];
        last_name = response["customers"]["data"][i]["last_name"];
        last_transaction_date = response["customers"]["data"][i]["last_transaction_date"];
        phone_number = response["customers"]["data"][i]["phone_number"];
        postal_code = response["customers"]["data"][i]["postal_code"];
        state_province = response["customers"]["data"][i]["state_province"];


        link = '/customer?customer_id='+customer_id
        html = `
                <td>`+ customer_id + `</td>
                <td>`+ first_name + ' ' + last_name + `</td>
                <td>`+ address + `</td>
                <td>`+ phone_number + `</td>
                <td>`+ branch_id + `</td>
                <td>`+ account_number + `</td>
                <td>`+ account_balance + `</td>
                <td>                
                    <button class='btn btn-primary' onclick="window.open('`+ link +`', '_blank')">
                        View
                     </button>
                </td>`

            
        let data_body = document.querySelector("#data_body");
        let child = document.createElement("tr");
        child.innerHTML = html;
        data_body.appendChild(child);
        
    }
}).then(response =>  {let table = new DataTable('#myTable')}
);
