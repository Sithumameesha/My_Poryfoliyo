var customerArray=[];
$("#btnCustomer").click(function (){

    let customerId= $("#txtCustomerId").val();
    let customerName=$("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary =$("#txtCustomerSalary").val();

    var customerObject ={
        id:customerId,
        name :customerName,
        salary: customerSalary,
        address :customerAddress,
    }

    customerArray.push(customerObject);

    loadAllCustomers();
});


$("#txtCustomerId,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on("keydown",function (event){
    if (event.key=="Tab"){
        event.preventDefault();
    }
});

function loadAllCustomers() {
    $("#customerTable").empty();

    for (var customer of customerArray) {

        var row = "<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td> "+customer.address+"</td><td> "+customer.salary+" </td></tr>";
        $("#customerTable").append(row);
    }
}


$("#customerTable>tr").click(function () {
    let rowData = $(this).text();
    console.log(rowData);
});
/*........................Search Customer.......................................*/

$("#txtCustomerId").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#txtCustomerId").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            $("#txtCustomerId").val(customer.id);
            $("#txtCustomerName").val(customer.name);
            $("#txtCustomerAddress").val(customer.address);
            $("#txtCustomerSalary").val(customer.salary);
        } else {
            alert("There is no customer");
        }
    }
});


function searchCustomer(cusID) {
    for (let customer of customerArray) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;
}

/*...................Delete Customer...........................................*/

$("#BtnDelete").click(function (){
    let deleteID=$("#searchCustId").val();
    DeleteCustomer(deleteID);

});


function DeleteCustomer(CustomerId){
    let customer= searchCustomer(CustomerId)
    if (CustomerId!=null){
        let index=customerArray.indexOf(customer);
        customerArray.splice(index,1);
        loadAllCustomers();

    }
}

$("#searchCustId").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#searchCustId").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            $("#searchCustId").val(customer.id);
            $("#disabledName").val(customer.name);
            $("#disabledAddress").val(customer.address);
            $("#disabledSalary").val(customer.salary);
        } else {
            alert("There is no customer");
        }
    }
});

/*...................Update Customer....................................*/
$("#searchCustomerId").on('keyup', function (event) {
    if (event.code == "Enter") {
        let typedId = $("#searchCustomerId").val();
        let customer = searchCustomer(typedId);
        if (customer != null) {
            $("#searchCustomerId").val(customer.id);
            $("#name").val(customer.name);
            $("#address").val(customer.address);
            $("#salary").val(customer.salary);
        } else {
            alert("There is no customer");
        }
    }
});

function UpdateCustomer(CustomerId){
    let customer =searchCustomer(CustomerId);
    if (customer!=null){
        customer.id=$("#searchCustomerId").val();
        customer.name=$("#name").val();
        customer.address=$("#address").val();
        customer.salary=$("#salary").val();
        loadAllCustomers();
    }
}


$("#btnUpdate").click(function (){
    let ID=$("#searchCustomerId").val();
    UpdateCustomer(ID);

});