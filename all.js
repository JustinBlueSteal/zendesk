(function() {
	try {
		if (jQuery) {
			// homepage stuff
			if ( jQuery('body').hasClass('home') ) {
				jQuery("<div class='box_bottom_clear'>&nbsp</div>").prependTo("#contentcolumn");

				var contentGrey = jQuery("<div/>").attr({
					"class" : "content content_grey"
				}).prependTo("#contentcolumn");

				var greyBoxTop = jQuery("<div/>").attr({
					"class" : "grey_box_top"
				}).appendTo(contentGrey);

				var boxTop = jQuery("<div/>").attr({
					"class" : "box box_top"
				}).appendTo(greyBoxTop);

				var form = jQuery("<form/>").attr({
					"action" : "/categories/search",
					"id" : "searchform",
					"method" : "get"
				}).appendTo(contentGrey);

				var inputContainer = jQuery("<div/>").attr({
					"style" : "margin:0;padding:0;display:inline;"
				}).appendTo(form);

				jQuery("<input type='hidden'/>").attr({
					"name" : "utf8",
					"value" : "&#x2713"
				}).appendTo(inputContainer);

				jQuery("<input type='text'/>").attr({
					"class" : "title",
					"id" : "query",
					"name" : "query",
					"autocomplete" : "off"
				}).appendTo(form);

				jQuery("<input type='hidden'/>").attr({
					"id" : "for_search",
					"name" : "for_search",
					"value" : "1"
				}).appendTo(form);

				jQuery("<input type='submit'/>").attr({
					"id" : "buttonsubmit",
					"name" : "commit",
					"value" : "SEARCH",
					"class" : "button search primary",
					"disable_with_ignored" : "Searching…"
				}).appendTo(form);

				jQuery("<div id='searchContactContent'/>").html("Can't find what you are looking for? Check out the support topics below or <a href=\"/anonymous_requests/new\">Contact Us</a>.").appendTo(form);

				var greyBoxBottom = jQuery("<div/>").attr({
					"class" : "grey_box_bottom"
				}).appendTo(contentGrey);

				var boxBottom = jQuery("<div/>").attr({
					"class" : "box box_bottom"
				}).appendTo(greyBoxBottom);
			}

			// page with a single help article
			if ( jQuery('body').hasClass('entries') ) {
				var backToHomeLink = jQuery("<div id='backToHomeLink'><a href='/home'>&laquo; Back to Support Home</a></div>");
				jQuery('.frame').append(backToHomeLink);

				// Change links from /forum to /home
				jQuery('a').each(function() {
					var thisLink = jQuery(this);
					if (thisLink.attr('href') == '/forums') {
						thisLink.attr('href', '/home');
					}
				});
			}

			// new request page
			if ( jQuery('body').hasClass('anonymous-new') ) {
				jQuery('#contentwrapper').before('<div id="contactUsGreeting">Contact Us</div>');
				jQuery('#end-user-form').append('<div style="clear: both;"/>');
			}

			// page with list of articles
			if ( jQuery('body').hasClass('forums') ) {
				var header = jQuery('#contentcolumn > div.content.content_grey h2').detach();
				var edit = jQuery("#contentcolumn > div.content.content_grey div.content-top-right.top").detach();
				jQuery("#contentcolumn div.forum_tabs div.content.content_grey").prepend(header);
				jQuery("#contentcolumn div.forum_tabs div.content.content_grey h2").before(edit);

				var backToHomeLink = jQuery("<div id='backToHomeLink'><a href='/home'>&laquo; Back to Support Home</a></div>");
				jQuery('.frame').append(backToHomeLink);

				// Hiding the word "Forum" in the forums page. 
				if (jQuery("h2.forums").children().length == 0) {
					jQuery("h2.forums").remove();
					jQuery("#backToHomeLink").remove();
					jQuery("#buttonsubmit").attr("value", "SEARCH").after("<div id='searchContactContent'>Can't find what you are looking for? Check out the support topics below or <a href=\"/anonymous_requests/new\">Contact Us</a>.</div>");
				}
				// If this is not the forums page, hide the search box
				else {
					jQuery("div.content.content_grey:has(form#searchform)").hide();
				}
				
				// Change links from /forum to /home
				jQuery('a').each(function() {
					var thisLink = jQuery(this);
					if (thisLink.attr('href') == '/forums') {
						thisLink.attr('href', '/home');
					}
				});
			}

			if ( jQuery('body').hasClass('categories-show') ) {
				var header = jQuery('#contentcolumn > div.content.content_grey h2').detach();
				var edit = jQuery("#contentcolumn > div.content.content_grey div.content-top-right.top").detach();
				jQuery('#contentcolumn div.forum_tabs div.content.content_grey').prepend(header);
				jQuery("#contentcolumn div.forum_tabs div.content.content_grey h2").before(edit);
			}

			if (jQuery("body").hasClass("categories")) {
				jQuery("div.content.content_grey:has(form#searchform)").hide();

				// Change links from /forum to /home
				jQuery('a').each(function() {
					var thisLink = jQuery(this);
					if (thisLink.attr('href') == '/forums') {
						thisLink.attr('href', '/home');
					}
				});
			}

			// EVERYWHERE
			// change delimiters to a bullet instead of a slash
			jQuery('h2 span.delim').each(function() {
				if ( jQuery(this).text() == '/' ) {
					jQuery(this).html('&bull;');
				}
			});
			
			jQuery("#header_container").remove();
			jQuery("<div id='logoContainer'>").addClass("clearfix_tm").appendTo("#header");
			jQuery("<a id='header2' href='http://www.tenmarks.com/'></a>").appendTo("#logoContainer");
			jQuery("<a id='homeLink' href='/home'>Help Desk</a>").appendTo("#logoContainer");
			jQuery("<a id='contactUsButton' href=\"/anonymous_requests/new\">Contact Us</a>").appendTo("#logoContainer");
		}
	}
	catch (e) {
		// noop
	}
})();