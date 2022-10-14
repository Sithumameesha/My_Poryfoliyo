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
if (customerArray.push(customerObject)){
        Swal.fire('Customer Suceesfully Added');
}


    loadAllCustomers();
    loadAllCustomersForOption();
    RawCount();


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
            Swal.fire('There Are No Customer Avalible');
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
    if (DeleteCustomer(deleteID)){

        Swal.fire('Customer Deleted');
    }else {
        Swal.fire('Any fool can use a computer');
    }

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
            Swal.fire('There Are No Customer Avalible')
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

    if ( UpdateCustomer(ID)){
        Swal.fire('Customer Updated')
    }

});
/*...........................................*/
$("#btnSearchCustomer").click(function (){
        let Id=$("#cusId").val();
        let cus= searchCustomer(Id);
        if (cus!=null){
         $("#customerTable").empty();
            var row = "<tr><td>"+cus.id+"</td><td>"+cus.name+"</td><td> "+cus.address+"</td><td> "+cus.salary+" </td></tr>";
            $("#customerTable").append(row);
        }else {
            Swal.fire('There Are No Customer Avalible');
            loadAllCustomers();
        }
});
$("#btnClear").click(function (){
   loadAllCustomers();
});
function RawCount(){
    var a = document.getElementById("customerTable");
    var rows = a.rows.length;
$("#customerCount").text(rows);
}