
let seeProfileBtn = document.getElementById('seeProfileBtn');
let transferBtn = document.getElementById('transferBtn');
let transactionHistoryBtn = document.getElementById('transactionHistoryBtn');


let customerProfileField = document.getElementById('customerProfileField');
let transferMoneyField = document.getElementById('transferMoneyField');
let transactionHistoryField = document.getElementById('transactionHistoryField');


seeProfileBtn.addEventListener('click', () => {
    seeProfileBtn.classList = 'btn btn-secondary mt-2';
    transferBtn.classList = 'btn btn-primary mt-2';
    transactionHistoryBtn.classList = 'btn btn-primary mt-2';

    customerProfileField.classList = 'container';
    transferMoneyField.classList = 'container hidden';
    transactionHistoryField.classList = 'container hidden';

})


transferBtn.addEventListener('click', () => {
    seeProfileBtn.classList = 'btn btn-primary mt-2';
    transferBtn.classList = 'btn btn-secondary mt-2';
    transactionHistoryBtn.classList = 'btn btn-primary mt-2';

    customerProfileField.classList = 'container hidden';
    transferMoneyField.classList = 'container';
    transactionHistoryField.classList = 'container hidden';
})  


transactionHistoryBtn.addEventListener('click', () => {
    seeProfileBtn.classList = 'btn btn-primary mt-2';
    transferBtn.classList = 'btn btn-primary mt-2';
    transactionHistoryBtn.classList = 'btn btn-secondary mt-2';

    customerProfileField.classList = 'container hidden';
    transferMoneyField.classList = 'container hidden';
    transactionHistoryField.classList = 'container';
})












