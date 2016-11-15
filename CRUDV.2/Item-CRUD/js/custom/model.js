function Item(id,name,desc,price,url){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.url = url;
    this.isDeleted=false;
}

var itemOperations = {
    id:1,
    itemList:[],
    addItem:function(name,desc , price,url){
        var itemObject  = new Item(this.id,name,desc,price,url);
        this.itemList.push(itemObject);
        this.id ++;
    },
    getAllItems:function(){
        return this.itemList;
    },
    toggleMarking:function(id){
        
    var itemObject = this.searchById(id);
    return itemObject.isDeleted = !itemObject.isDeleted;
    },
    searchById:function(id){
       var itemSubArray = this.itemList.filter(function(itemObject){
           return itemObject.id ==id;
       });
        return itemSubArray.length>0?itemSubArray[0]:null;
       
    }
}