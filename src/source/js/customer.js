$(function(){
	/*check start*/
	var checkall = $(".check-all-sub").find("input[type='checkbox'][state='checkall']");
	var checksub = $(".check-all-sub").find("input[type='checkbox'][state='checksub']");
	checkall.on("click",function(){
		if($(this).is(":checked")){
			checksub.prop("checked",true);
		}else{
			checksub.prop("checked",false);
		}
	});	
	checksub.on("click",function(){
		checksub.each(function(index){
			if(!$(this).is(":checked")){
				checkall.prop("checked",false);
				return false;
			}
			checkall.prop("checked",true);
		});
	});
	/*check end*/
});