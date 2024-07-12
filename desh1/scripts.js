document.addEventListener('DOMContentLoaded', function() {
    const transactionHeader = document.getElementById('transaction-header');
    const transactionTable = document.getElementById('transaction-table');

    transactionHeader.addEventListener('click', function() {
        if (transactionTable.style.display === 'none' || transactionTable.style.display === '') {
            transactionTable.style.display = 'table';
        } else {
            transactionTable.style.display = 'none';
        }
    });

    document.getElementById('borrow').addEventListener('click', function() {
        window.location.href = 'borrow/index.html'; // Replace with actual URL
    });

    document.getElementById('invest').addEventListener('click', function() {
        window.location.href = 'deposit/index.html'; // Replace with actual URL
    });

    document.getElementById('refer-friend').addEventListener('click', function() {
        window.location.href = 'refer.html'; // Replace with actual URL
    });

    document.getElementById('withdraw').addEventListener('click', function() {
        window.location.href = 'withdraw/index.html'; // Replace with actual URL
    });
});
