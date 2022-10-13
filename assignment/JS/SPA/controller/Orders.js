function loadAllCustomersForOption() {
    $("#customerId").empty();
    for (let cus of customerArray) {
        $("#customerId").append(`<option>${cus.id}</option>`);
    }

}
$("#customerId").on('click', function (event) {

        let typedId = $("#customerId").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            $("#customerName").val(customer.name);
            $("#customerAddress").val(customer.address);
            $("#customerSalary").val(customer.salary);

    }
});