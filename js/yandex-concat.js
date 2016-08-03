(function () {
	'use strict';
	function yadTemplateConcat(ads) {
		var stringOfHtml = '';
		for (var i = 0; i < ads.length; i++) {
			var yadItem = ads[i];
			stringOfHtml += '<div class="yad">';
			stringOfHtml += '<a href="https://direct.yandex.ru/?partner" class="yad-logo">Яндекс.Директ</a>';
			stringOfHtml += '<div class="yad-wrap">';

			stringOfHtml += '<figure class="yad-image-wrap">';

			if ( typeof yadItem.images !== 'undefined' && yadItem.images.length > 0 ) {
				stringOfHtml += '<a class="yad-url" href="' + yadItem.url + '">';
				stringOfHtml += '<img class="yad-image" src="' + yadItem.images[0][0] + '" width="' + yadItem.images[0][1] + '" height="' + yadItem.images[0][2] + '" alt="Изображение объявления">';
				stringOfHtml += '</a>';
			}
			
			stringOfHtml += '</figure>';

			stringOfHtml += '<div class="yad-content">';
			stringOfHtml += '<div class="yad-heading">';
			stringOfHtml += '<h1 class="yad-title"><a class="yad-url" href="' + yadItem.url + '">' + yadItem.title + '</a></h1>';
			stringOfHtml += '<div class="yad-domain">' + yadItem.domain + '</div>';
			stringOfHtml += '</div>';
			stringOfHtml += '<div class="yad-body">' + yadItem.body + '</div>';

			if ( yadItem.sitelinks.length ) {
				stringOfHtml += '<div class="yad-sitelinks">';

				for (var y = 0; y < yadItem.sitelinks.length; y++) {
					stringOfHtml += '<a href="' + yadItem.sitelinks[y].url + '" class="yad-sitelinks__link">' + yadItem.sitelinks[y].title + '</a>';
				}

				stringOfHtml += '</div>';
			}
			
			stringOfHtml += '</div></div></div>';
		}
		return stringOfHtml;
	}

	var yadHtml = yadTemplateConcat(ads);
	$('.content').append(yadHtml);
}());