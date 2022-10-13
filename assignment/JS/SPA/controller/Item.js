
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
     loadAllItemsForOption();
    Swal.fire('Item Add Sucessfully');
})
function loadAllItems(){
    $("#itemsTable").empty();
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

        }else {
            Swal.fire('There Are No Item Avalible');
        }
    }

});
/*......................Updated Item..........................................*/

$("#searchItemId").on("keyup",function (event){
    if (event.code=="Enter"){
        let ItemId=$("#searchItemId").val();
        let Item= SearchItem(ItemId);
        if (Item!=null){
            $("#searchItemId").val(Item.id);
            $("#Itemnames").val(Item.name);
            $("#ItemFromPrice").val(Item.price);
            $("#ItemQuantity").val(Item.qty);

        }else {
            Swal.fire('There Are No Item Avalible');
        }
    }

});

function UpdateItem(ItemID){
    let Id= $("#searchItemId").val();
    let Item = SearchItem(Id);
    if (Item!=null){
       Item.id= $("#searchItemId").val();
        Item.name=$("#Itemnames").val();
         Item.price=$("#ItemFromPrice").val();
        Item.qty= $("#ItemQuantity").val();
        loadAllItems();
    }
}
$("#btnUpdatesItem").click(function (){
    let Item = $("searchItemId").val();

    if (UpdateItem(Item)){
        Swal.fire('Item Updated');
    }else {
        Swal.fire('There Are No Item Avalible');
    }
});


/*....................Delete Item................................*/


$("#searchCId").on("keyup",function (event){
    if (event.code=="Enter"){
        let ItemId=$("#searchCId").val();
        let Item= SearchItem(ItemId);
        if (Item!=null){
            $("#searchCId").val(Item.id);
            $("#disabledItemName").val(Item.name);
            $("#disabledItemPrice").val(Item.price);
            $("#disabledItemQuantity").val(Item.qty);

        }
        else {
            Swal.fire('There Are No Item Avalible');
        }
    }

});

function DeleteItem(ItemId){
    let item= SearchItem(ItemId)
    if (ItemId!=null){
        let index=customerArray.indexOf(item);
        ItemArray.splice(index,1);
       loadAllItems();

    }
}
$("#btnDeleteItem").click(function (){
    let deleteID=$("#searchCId").val();

    if (DeleteItem(deleteID)){
        Swal.fire('Item Deleted');
    }else {
        Swal.fire('Item Delete Not Working');
    }

});
