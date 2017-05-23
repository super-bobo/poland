$(function(){
	
});

//login 验证
function login_validator(currentNode, text, errorStatus){
	var iconNode = $('<i class="form-control-feedback glyphicon glyphicon-remove" data-bv-icon-for="password" style=""></i>'),
	 	tipNode = $('<small class="help-block"></small>'),
	 	currentVal = $(currentNode).val(),
	 	parentNode = $(currentNode).parent('').hasClass('form-group')? $(currentNode).parent('.form-group') : $(currentNode).parents('.form-group');
	console.log(parentNode);
	if(currentVal == "" || errorStatus){
		tipNode.text(text);
		parentNode.addClass('has-error');
		if(parentNode.find('i').length == 0){
			iconNode.appendTo(parentNode);
			tipNode.appendTo(parentNode);
		}
	}else{
		parentNode.removeClass('has-error');
		parentNode.find('i, small').remove();
	}
}

//点击提交按钮事件
function submit_validator(){
	login_validator('#username', 'User name can not be empty!');
	login_validator('#password', 'Password name can not be empty!');
	login_validator('#vercode', 'Verification Code name can not be empty!');
	var usernameVal = $('#username').val(),
		passwordVal = $('#password').val(),
		vercodeVal = $('#vercode').val();
	$.ajax({
		url: '/path/to/file',
		type: 'post',
		dataType: 'json',
		data: {
			username: usernameVal,
			password: passwordVal,
			vercode: vercodeVal
		},
	})
	.done(function(res) {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	
}