
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


$("#AddToCart").click(function (){
loadCartTableDetail();
calcQty($("#buyQty").val());
calcTotal();


});
/*....................Total Cal...................*/
function calcTotal() {
 var tbl = document.getElementById("OrderTable"),sum=0;
 for (var i=0; i<tbl.rows.length; i++){
     sum=sum + parseInt(tbl.rows[i].cells[4].innerHTML);
    var Ototal= $("#total").val(sum);
 }

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
function calcQty(orderQty) {
    var minQty = parseInt(orderQty);
    var reduceQty = parseInt($("#qtyOnHand").val());
    reduceQty = reduceQty - minQty;
    $("#qtyOnHand").val(reduceQty);
}
/*.....................Disconunt Function...............*/
$(document).on("change keyup blur","#discount", function () {
    var total= $("#total").val();
    var discount =0 ;
    var subtotal= 0 ;
     discount = $("#discount").val();
     discount = (total / 100) * discount;
    subtotal = total - discount;

    $("#subTotal").val(subtotal);
});
/*................................................*/
$(document).on("change keyup blur", "#cash", function () {
    var cash = $("#cash").val();
    var subTotal= $("#subTotal").val();
    var balance = cash - subTotal;
    $("#balance").val(balance);
    if (balance < 0) {
        $("#lblCheckSubtotal").parent().children('span').text(balance+" : plz enter valid Balance");
        $("#btnPurchase").attr('disabled', true);
    } else {
        $("#lblCheckSubtotal").parent().children('span').text("");
        $("#btnPurchase").attr('disabled', false);
    }
});