$(function(){
	var zTreeObj;
	var setting = {
		
	};
	var zNodes = [{
		name:"菜单1", 
		open:true, 
		children:[{
			name:"子菜单1-1"
		}, {
			name:"子菜单1-2"
		}],
		content: []
	},{
		name:"菜单2", 
		open:true, 
		children:[{
			name:"子菜单2-1"
		}, {
			name:"子菜单2-2"
		}, {
			name:"子菜单2-3"
		}]
	}];
	zTreeObj = $.fn.zTree.init($("#ztreeData"), setting, zNodes);
})
