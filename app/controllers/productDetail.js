var args = arguments[0] || {};

/*
 * Simulator data
 */
function getData(id){
	var result={
		itemName:"iPhone 5",
		productId:"002-113-225",
		supplierName:"Apple",
		purhaseDate:"22/10/2014",
		warrantyTime:"2 years",
		maintenanceSchedule:[{
			
		}]
	};
	
	$.productName.setText(result.itemName);
	$.productId.setText("Product ID: "+result.productId);
	$.supplierName.setText("Supplier: "+result.supplierName);
	$.purhaseDate.setText(result.purhaseDate);
	$.warrantyTime.setText(result.warrantyTime);
}
