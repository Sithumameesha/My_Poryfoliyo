
/*Set Com Box Customer*/
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

/*..............Set Item In to the combo box.............................*/
function loadAllItemsForOption() {
    $("#itemcode").empty();
    for (let item of ItemArray) {
        $("#itemcode").append(`<option>${item.id}</option>`);
    }

}
$("#itemcode").on('click', function (event) {

    let typedId = $("#itemcode").val();
    let item = SearchItem(typedId);
    if (item != null) {
        $("#itemName").val(item.name);
        $("#itemPrice").val(item.price);
        $("#qtyOnHand").val(item.qty);

    }
});
/*....................Total Cal...................*/

$("#AddToCart").click(function (){
  // calcTotal($("#itemPrice").val() * $("#qtyOnHand"));
loadCartTableDetail();
reduceQty($("#buyQty").val());


});

function calcTotal(amount) {
   var total = amount;
    $("#total").val(total);
    console.log(total);
}
/*..........................................*/
function loadCartTableDetail() {
   let Code = $("#itemcode").val();
    let Name = $("#itemName").val();
    let Price = $("#itemPrice").val();
    let QtyOnHand = $("#qtyOnHand").val();
    let  OrderQty = $("#buyQty").val();

    let total = Price * OrderQty;
    var row = `<tr><td>${Code}</td><td>${Name}</td><td>${Price}</td><td>${OrderQty}</td><td>${total}</td></tr>`;

    $("#OrderTable").append(row);

}
function reduceQty(orderQty) {
    var minQty = parseInt(orderQty);
    var reduceQty = parseInt($("#qtyOnHand").val());
    reduceQty = reduceQty - minQty;
    $("#qtyOnHand").val(reduceQty);
}