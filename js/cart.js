function add_to_cart_table(item_id){
	document.getElementById('selected_items').style.display= 'block' ;
	var items = [
		[0, 'item_one_name', 'item_one_price'],
		[1, 'item_two_name', 'item_two_price'],
		[2, 'item_three_name', 'item_three_price'],
		[3, 'item_four_name', 'item_four_price'],
	];
	var mydata = JSON.parse(data);
	//alert(mydata[i].name);
	
	var html = '<table>';
	for (var i=0, len=items.length; i<len; i++) {
		if(i=item_id){
			html += '<tr><td>' + items[i][1] + '</td> <td>' + items[i][2] + '</td></tr>';
		}
		break;
	}
	html += '</table>';
	$("#content_table").append(html);
}

function import_cart_table(){
	$("#import_content").load("table.html");
}