(function () {
	'use strict';
	function yadTemplateConcat(ads) {
		var htmlString = '';
		for (var i = 0; i < ads.length; i++) {
			var yadItem = ads[i];
			htmlString += '<div class="yad">';
			htmlString += '<a href="https://direct.yandex.ru/?partner" class="yad-logo">Яндекс.Директ</a>';
			htmlString += '<div class="yad-wrap">';

			htmlString += '<figure class="yad-image-wrap">';

			if ( typeof yadItem.images !== 'undefined' && yadItem.images.length > 0 ) {
				htmlString += '<a class="yad-url" href="' + yadItem.url + '">';
				htmlString += '<img class="yad-image" src="' + yadItem.images[0][0] + '" width="' + yadItem.images[0][1] + '" height="' + yadItem.images[0][2] + '" alt="Изображение объявления">';
				htmlString += '</a>';
			}
			
			htmlString += '</figure>';

			htmlString += '<div class="yad-content">';
			htmlString += '<div class="yad-heading">';
			htmlString += '<h1 class="yad-title"><a class="yad-url" href="' + yadItem.url + '">' + yadItem.title + '</a></h1>';
			htmlString += '<div class="yad-domain">' + yadItem.domain + '</div>';
			htmlString += '</div>';
			htmlString += '<div class="yad-body">' + yadItem.body + '</div>';

			if ( yadItem.sitelinks.length ) {
				htmlString += '<div class="yad-sitelinks">';

				for (var y = 0; y < yadItem.sitelinks.length; y++) {
					htmlString += '<a href="' + yadItem.sitelinks[y].url + '" class="yad-sitelinks__link">' + yadItem.sitelinks[y].title + '</a>';
				}

				htmlString += '</div>';
			}

			htmlString += '<div class="yad-warnings">';

			if ( yadItem.warning ) {
				htmlString += '<div class="yad-warning">' + yadItem.warning + '</div>';
			}

			if ( yadItem.age ) {
				htmlString += '<div class="yad-age">' + yadItem.age + '</div>';
			}
			
			htmlString += '</div></div></div></div>';
		}
		return htmlString;
	}

	var yadHtml = yadTemplateConcat(ads);
	$('.yad-list__content').append(yadHtml);
}());