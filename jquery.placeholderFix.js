/*!
 * jQuery placeholderFix plugin
 * requires jQuery v1.6 or later
 *
 * Examples at: http://www.simonepomata.com/jquery/plugin/placeholderFix/
 *
 * Copyright (c) 2012 - Simone Pomata
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.0  Aug-06-2012
 */

(function($) {
	$.fn.placeholderFix = function( options ) {

		var settings = $.extend( {
			'allBrowser' : false,
			'class' : 'placeholderFix'
		}, options);

		$.extend($.support, { placeholder: ('placeholder' in document.createElement('input')) });

		if( !$.support.placeholder || settings['allBrowser'] ){
			var passwordClassName = 'placeholderFix-password';

			return this.each(function() {

				var that = this;
				var placeholderText = $(this).attr( 'placeholder' );
				
				addPlaceholder( this, settings['class'], passwordClassName, placeholderText );

				$(this).removeAttr('placeholder')
				.focus(function() { if ( $(this).hasClass( settings['class'] ) ) {
					removePlaceholder( this, settings['class'], passwordClassName);
				}})
				.blur(function() { if ( $(this).val() == '' ) {
					addPlaceholder( this, settings['class'], passwordClassName, placeholderText );
				}});

				$(this).closest('form')
					.bind( 'reset' , function(e) {
						addPlaceholder( that, settings['class'], passwordClassName, placeholderText );
						e.preventDefault();
					})
					.submit(function() { if ( $(that).hasClass( settings['class'] ) ) {
						removePlaceholder( that, settings['class'], passwordClassName );
					}});

			});

			function addPlaceholder(el,cl,pw,tx) { 
				if ($(el).attr('type')=='password') {
					$(el).addClass(pw);
					el.type = 'text';
				}			
				$(el).addClass(cl).val(tx);
			}
			function removePlaceholder(el,cl,pw) { 
				if ($(el).hasClass(pw)) {
					$(el).removeClass(pw);
					el.type = 'password';
				}	
				$(el).removeClass(cl).val('');
			}

		}
	};
})( jQuery );