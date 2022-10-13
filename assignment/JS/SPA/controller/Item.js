
/*.............................Save Item........................................*/
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
/*.....................Search Item.....................................*/
function SearchItem(ItemId){
    for (var Item of ItemArray){
        if (Item.id==ItemId){
            return Item;
        }
            }
    return null;
}
$("#txtItemId").on("keyup",function (event){
    if (event.code=="Enter"){
        let ItemId=$("#txtItemId").val();
        let Item= SearchItem(ItemId);
        if (Item!=null){
            $("#txtItemId").val(Item.id);
            $("#txtItemName").val(Item.name);
            $("#txtItemPrice").val(Item.price);
            $("#txtItemQty").val(Item.qty);

        }
    }

});