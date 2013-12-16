(function(global) {
	var jqLite = function(selector) {
		if(selector && selector.length > 2 && selector[0] === '#') {
			var elementId = selector.substring(1);
			this.element = global.document.getElementById(elementId);
		}
		this.hide = function() {
			this.element.style.display = 'none';
		};
		this.show = function() {
			this.element.style.display = 'block';
		};
		this.getStyle = function(styleName) {
			var styles = document.defaultView.getComputedStyle(this.element, '');
			if(styles && styles[styleName]){
				return styles[styleName];
			}
		};
		this.getHeight = function() {
			return parseInt(this.getStyle('height'));
		};
		
		this.setHeight = function(newHeight) {
			this.element.style.height = newHeight + 'px';
		};
		this.slideDown = function(timeout) {
			timeout = timeout || 500;
			this.element.style.overflow = 'auto';
			this.show();
			var height = this.getHeight();
			var that = this;
			for (var i = 0; i < timeout; i++) {
				var h = i / timeout * height;
				(function(newHeight) {
					setTimeout(function() {
						that.setHeight(newHeight);
					}, i);
				})(h);
			};

		};
	};
	global.$ = function(selector) {
		return new jqLite(selector);
	};
})(window);
