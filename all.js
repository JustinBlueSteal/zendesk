(function() {
	try {
		if (jQuery) {
			// homepage stuff
			if ( jQuery('body').hasClass('home') ) {
				var welcomeDiv = jQuery("<div id='welcomeDiv'><h1>Welcome!</h1><h2>How can we help?</h2></div>");
				jQuery("#solution_suggestion").before(welcomeDiv);

				var belowSearchDiv = jQuery("<div id='belowSearchDiv'>Can't find what you're looking for? See support topics below or <a href='/anonymous_requests/new'>contact us</a>.</div>");
				jQuery("#solution_suggestion").after(belowSearchDiv);

				jQuery('#topic_search_result').parent().prepend('<div id="no-results-div">Sorry, no results found.</div>');
			}

			// page with a single help article
			if ( jQuery('body').hasClass('entries') ) {
				var backToHomeLink = jQuery("<div id='backToHomeLink'><a href='/forums'>&laquo; Back to Support Home</a></div>");
				jQuery('.frame').append(backToHomeLink);
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

				var backToHomeLink = jQuery("<div id='backToHomeLink'><a href='/forums'>&laquo; Back to Support Home</a></div>");
				jQuery('.frame').append(backToHomeLink);
			}

			if ( jQuery('body').hasClass('categories-show') ) {
				var header = jQuery('#contentcolumn > div.content.content_grey h2').detach();
				var edit = jQuery("#contentcolumn > div.content.content_grey div.content-top-right.top").detach();
				jQuery('#contentcolumn div.forum_tabs div.content.content_grey').prepend(header);
				jQuery("#contentcolumn div.forum_tabs div.content.content_grey h2").before(edit);
			}

			// EVERYWHERE
			// change delimiters to a bullet instead of a slash
			jQuery('h2 span.delim').each(function() {
				if ( jQuery(this).text() == '/' ) {
					jQuery(this).html('&bull;');
				}
			});

			// update all links to /forums to sau 'Support Topics'
			jQuery('a').each(function() {
				var thisLink = jQuery(this);
				if ( thisLink.parent().attr("id") != "backToHomeLink" && thisLink.attr('href') == '/forums' ) {
					thisLink.text('TenMarks Math');
				}
			});

			
			jQuery("#header_container").remove();
			
			jQuery("<div id='logoContainer'>").addClass("clearfix_tm").appendTo("#header");
			jQuery("<a id='header2' href='http://www.tenmarks.com/'></a>").appendTo("#logoContainer");
			jQuery("<a id='contactUsButton' href=\"/anonymous_requests/new\">Contact Us</a>").appendTo("#logoContainer");

			// Hiding the word "Forum" in the forums page. 
			if (jQuery("h2.forums").children().length == 0) {
				console.log("removed");
				jQuery("h2.forums").remove();
				jQuery("#backToHomeLink").remove();
				jQuery("#buttonsubmit").attr("value", "SUBMIT").after("<div id='searchContactContent'>Can't find what you are looking for? Check out the support topics below or <a href=\"/anonymous_requests/new\">Contact Us</a></div>");
			}
			// If this is not the forums page, hide the search box
			else {
				jQuery("div.content.content_grey:has(form#searchform)").hide();
			}
		}
	}
	catch (e) {
		// noop
	}
})();