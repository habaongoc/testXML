$.tabGroup.open();
function openProductDetailPage(e){
	/*var item = $.listProduct.sections[0].getItemAt(e.itemIndex);
	Ti.API.info(JSON.stringify(item));
	Ti.API.info(JSON.stringify(item.properties.itemId));*/
	var productDetailPage = Alloy.createController("productDetail",{
		//data: item.properties.itemId
	}).getView();
	$.tabGroup.getActiveTab().open(productDetailPage);	
}