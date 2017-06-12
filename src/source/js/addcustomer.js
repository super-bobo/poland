$(function(){
	var tabWrapper = $('#add-customer');
	var tabs = tabWrapper.find('ul li');

	//get selected tab
	function getSelectedTabIndex() {
		var currentTab = 0;
		$.each(tabs, function(index, val) {
			if($(this).hasClass('active')){
				currentTab = index;
				return;
			}
		});
		return currentTab;
	}

	//get tab contents
	beginTab = $("#add-customer ul li:eq(" + getSelectedTabIndex() + ")").find("a");

	loadTabFrame($(beginTab).attr("href"),$(beginTab).attr("rel"));

	tabWrapper.find("a.customer-con").click(function() {
		loadTabFrame($(this).attr("href"),$(this).attr("rel"));
	});


})

//tab switching function
function loadTabFrame(tab, url) {
	if ($(tab).find("iframe").length == 0) {
		var html = [];
		html.push('<div class="tabIframeWrapper">');
		html.push('<iframe class="iframetab" id="iframe-'+ tab +'" src="' + url + '" onload="setIframeHeight(this)" width="100%" frameborder="0">Load Failed?</iframe>');
		html.push('</div>');
		$(tab).append(html.join(""));
	}
	return false;
}

function setIframeHeight(iframe) {
	if (iframe) {
		var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		if (iframeWin.document.body) {
			iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
};
