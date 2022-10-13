var ItemArray=[];
$("#btnItem").click(function (){
   let ItemId =$("#txtItemId").val();
     let  ItemName=$("#txtItemName").val();
     let ItemPrice=$("#txtItemPrice").val();
     let ItemQty= $("#txtItemQty").val();

     var ItemObject={
         id:ItemId,
         name:ItemName,
         price:ItemPrice,
         qty:ItemQty
     }
     ItemArray.push(ItemObject);
     console.log(ItemObject);
     loadAllItems();
})
function loadAllItems(){
    for (var Item of ItemArray){
        var row = "<tr><td>"+Item.id+"</td><td>"+Item.name+"</td><td> "+Item.price+"</td><td> "+Item.qty+" </td></tr>";
        $("#itemsTable").append(row);
    }
}