(function () {
	'use strict';
	var arrayOfBooks = [{
		id: 1, 
		img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmY4NDAwIiBkPSJNMCAwaDkwdjEyMGgtOTB6Ii8+PHBhdGggZD0iTTIzLjYxNyA3MS4xNDhoMi42MjJsLTUuOTk3LTEyLjEzNSA1LjgtMTAuMTYxaC0yLjU4OWwtNi4wOTUgMTAuNzY2di0xMC43NjZoLTIuNTU2djIyLjI5NmgyLjU1NnYtNy40ODVsMS4zNDQtMi4xOTggNC45MTUgOS42ODN6TTM2LjM5OCA2MS4xMTV2MTAuMDMzaDIuNTU2di0yMi4yOTZoLTIuNTU2djEwLjAzM2gtNS42Mzd2LTEwLjAzM2gtMi41NTZ2MjIuMjk2aDIuNTU2di0xMC4wMzNoNS42Mzd6TTUwLjA5NiA1My40MDd2MTcuNzQxaDIuMjk0di0yMi4yOTZoLTIuODUxbC0zLjY3MSAxMC40NzktMi4wMzEgNi4xNDh2LTE2LjYyN2gtMi4yNjJ2MjIuMjk2aDIuNjU1bDMuMzc1LTEwLjI4OCAyLjQ5MS03LjQ1M3pNNjQuMTU0IDUxLjExM3YtMi4yNjFoLTkuMTQzdjIyLjI5NmgyLjUyNHYtMjAuMDM1aDYuNjE5ek03MS43NTcgNjYuNjU3bC44ODUgNC40OTFoMi41NTZsLTQuMzkxLTIyLjI5NmgtMy43MDNsLTQuMzkxIDIyLjI5NmgyLjM1OWwuODg1LTQuNDkxaDUuOHptLTIuOTQ5LTE1LjAwMmwyLjU4OSAxMi44NjhoLTUuMTEybDIuNTIzLTEyLjg2OHoiLz48L3N2Zz4=', 
		title: 'Мастер и Маргарита', 
		author: 'Михаил Булгаков', 
		rating: 6,
		votes: 666,
		genre: [
			{ id: 1, title: 'Роман' }, 
			{ id: 2, title: 'Мистика' }
			]
		}, {
		id: 2, 
		img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmY4NDAwIiBkPSJNMCAwaDkwdjEyMGgtOTB6Ii8+PHBhdGggZD0iTTIzLjYxNyA3MS4xNDhoMi42MjJsLTUuOTk3LTEyLjEzNSA1LjgtMTAuMTYxaC0yLjU4OWwtNi4wOTUgMTAuNzY2di0xMC43NjZoLTIuNTU2djIyLjI5NmgyLjU1NnYtNy40ODVsMS4zNDQtMi4xOTggNC45MTUgOS42ODN6TTM2LjM5OCA2MS4xMTV2MTAuMDMzaDIuNTU2di0yMi4yOTZoLTIuNTU2djEwLjAzM2gtNS42Mzd2LTEwLjAzM2gtMi41NTZ2MjIuMjk2aDIuNTU2di0xMC4wMzNoNS42Mzd6TTUwLjA5NiA1My40MDd2MTcuNzQxaDIuMjk0di0yMi4yOTZoLTIuODUxbC0zLjY3MSAxMC40NzktMi4wMzEgNi4xNDh2LTE2LjYyN2gtMi4yNjJ2MjIuMjk2aDIuNjU1bDMuMzc1LTEwLjI4OCAyLjQ5MS03LjQ1M3pNNjQuMTU0IDUxLjExM3YtMi4yNjFoLTkuMTQzdjIyLjI5NmgyLjUyNHYtMjAuMDM1aDYuNjE5ek03MS43NTcgNjYuNjU3bC44ODUgNC40OTFoMi41NTZsLTQuMzkxLTIyLjI5NmgtMy43MDNsLTQuMzkxIDIyLjI5NmgyLjM1OWwuODg1LTQuNDkxaDUuOHptLTIuOTQ5LTE1LjAwMmwyLjU4OSAxMi44NjhoLTUuMTEybDIuNTIzLTEyLjg2OHoiLz48L3N2Zz4=', 
		title: 'Мастер и Маргарита', 
		author: 'Михаил Булгаков', 
		rating: 4.92,
		votes: 152,
		genre: [
			{ id: 1, title: 'Роман' }, 
			{ id: 2, title: 'Мистика' }
			]
		}, {
		id: 3, 
		img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmY4NDAwIiBkPSJNMCAwaDkwdjEyMGgtOTB6Ii8+PHBhdGggZD0iTTIzLjYxNyA3MS4xNDhoMi42MjJsLTUuOTk3LTEyLjEzNSA1LjgtMTAuMTYxaC0yLjU4OWwtNi4wOTUgMTAuNzY2di0xMC43NjZoLTIuNTU2djIyLjI5NmgyLjU1NnYtNy40ODVsMS4zNDQtMi4xOTggNC45MTUgOS42ODN6TTM2LjM5OCA2MS4xMTV2MTAuMDMzaDIuNTU2di0yMi4yOTZoLTIuNTU2djEwLjAzM2gtNS42Mzd2LTEwLjAzM2gtMi41NTZ2MjIuMjk2aDIuNTU2di0xMC4wMzNoNS42Mzd6TTUwLjA5NiA1My40MDd2MTcuNzQxaDIuMjk0di0yMi4yOTZoLTIuODUxbC0zLjY3MSAxMC40NzktMi4wMzEgNi4xNDh2LTE2LjYyN2gtMi4yNjJ2MjIuMjk2aDIuNjU1bDMuMzc1LTEwLjI4OCAyLjQ5MS03LjQ1M3pNNjQuMTU0IDUxLjExM3YtMi4yNjFoLTkuMTQzdjIyLjI5NmgyLjUyNHYtMjAuMDM1aDYuNjE5ek03MS43NTcgNjYuNjU3bC44ODUgNC40OTFoMi41NTZsLTQuMzkxLTIyLjI5NmgtMy43MDNsLTQuMzkxIDIyLjI5NmgyLjM1OWwuODg1LTQuNDkxaDUuOHptLTIuOTQ5LTE1LjAwMmwyLjU4OSAxMi44NjhoLTUuMTEybDIuNTIzLTEyLjg2OHoiLz48L3N2Zz4=', 
		title: 'Мастер и Маргарита', 
		author: 'Михаил Булгаков', 
		rating: 8.25,
		votes: 1023,
		genre: [
			{ id: 1, title: 'Роман' }, 
			{ id: 2, title: 'Мистика' }
			]
		}, {
		id: 4, 
		img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmY4NDAwIiBkPSJNMCAwaDkwdjEyMGgtOTB6Ii8+PHBhdGggZD0iTTIzLjYxNyA3MS4xNDhoMi42MjJsLTUuOTk3LTEyLjEzNSA1LjgtMTAuMTYxaC0yLjU4OWwtNi4wOTUgMTAuNzY2di0xMC43NjZoLTIuNTU2djIyLjI5NmgyLjU1NnYtNy40ODVsMS4zNDQtMi4xOTggNC45MTUgOS42ODN6TTM2LjM5OCA2MS4xMTV2MTAuMDMzaDIuNTU2di0yMi4yOTZoLTIuNTU2djEwLjAzM2gtNS42Mzd2LTEwLjAzM2gtMi41NTZ2MjIuMjk2aDIuNTU2di0xMC4wMzNoNS42Mzd6TTUwLjA5NiA1My40MDd2MTcuNzQxaDIuMjk0di0yMi4yOTZoLTIuODUxbC0zLjY3MSAxMC40NzktMi4wMzEgNi4xNDh2LTE2LjYyN2gtMi4yNjJ2MjIuMjk2aDIuNjU1bDMuMzc1LTEwLjI4OCAyLjQ5MS03LjQ1M3pNNjQuMTU0IDUxLjExM3YtMi4yNjFoLTkuMTQzdjIyLjI5NmgyLjUyNHYtMjAuMDM1aDYuNjE5ek03MS43NTcgNjYuNjU3bC44ODUgNC40OTFoMi41NTZsLTQuMzkxLTIyLjI5NmgtMy43MDNsLTQuMzkxIDIyLjI5NmgyLjM1OWwuODg1LTQuNDkxaDUuOHptLTIuOTQ5LTE1LjAwMmwyLjU4OSAxMi44NjhoLTUuMTEybDIuNTIzLTEyLjg2OHoiLz48L3N2Zz4=', 
		title: 'Мастер и Маргарита', 
		author: 'Михаил Булгаков', 
		rating: 3.23,
		votes: 221,
		genre: [
			{ id: 1, title: 'Роман' }, 
			{ id: 2, title: 'Мистика' }
			]
		}, {
		id: 5, 
		img: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOTAgMTIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjZmY4NDAwIiBkPSJNMCAwaDkwdjEyMGgtOTB6Ii8+PHBhdGggZD0iTTIzLjYxNyA3MS4xNDhoMi42MjJsLTUuOTk3LTEyLjEzNSA1LjgtMTAuMTYxaC0yLjU4OWwtNi4wOTUgMTAuNzY2di0xMC43NjZoLTIuNTU2djIyLjI5NmgyLjU1NnYtNy40ODVsMS4zNDQtMi4xOTggNC45MTUgOS42ODN6TTM2LjM5OCA2MS4xMTV2MTAuMDMzaDIuNTU2di0yMi4yOTZoLTIuNTU2djEwLjAzM2gtNS42Mzd2LTEwLjAzM2gtMi41NTZ2MjIuMjk2aDIuNTU2di0xMC4wMzNoNS42Mzd6TTUwLjA5NiA1My40MDd2MTcuNzQxaDIuMjk0di0yMi4yOTZoLTIuODUxbC0zLjY3MSAxMC40NzktMi4wMzEgNi4xNDh2LTE2LjYyN2gtMi4yNjJ2MjIuMjk2aDIuNjU1bDMuMzc1LTEwLjI4OCAyLjQ5MS03LjQ1M3pNNjQuMTU0IDUxLjExM3YtMi4yNjFoLTkuMTQzdjIyLjI5NmgyLjUyNHYtMjAuMDM1aDYuNjE5ek03MS43NTcgNjYuNjU3bC44ODUgNC40OTFoMi41NTZsLTQuMzkxLTIyLjI5NmgtMy43MDNsLTQuMzkxIDIyLjI5NmgyLjM1OWwuODg1LTQuNDkxaDUuOHptLTIuOTQ5LTE1LjAwMmwyLjU4OSAxMi44NjhoLTUuMTEybDIuNTIzLTEyLjg2OHoiLz48L3N2Zz4=', 
		title: 'Мастер и Маргарита', 
		author: 'Михаил Булгаков', 
		rating: 6.31,
		votes: 178,
		genre: [
			{ id: 1, title: 'Роман' }, 
			{ id: 2, title: 'Мистика' }
			]
		}
		];

	function stars(rating) {
		var size = Math.max(0, (Math.min(5, rating / 2))) * 16;
		var stringOfHtml = '<span class="book__rating-stars"><span style="width:' + size + 'px"></span></span>';
		return stringOfHtml;
	}

	function booksOutput(books) {

		var stringOfHtml = '';

		for (var i = 0; i < books.length; i++) {
			var book = books[i];
			var ratingInStars = stars(book.rating);

			stringOfHtml += '<li class="books-list__item" id="book-id' + book.id + '">';
			stringOfHtml += '<div class="book__rating" title="Проголосовало: ' + book.votes + '">' + ratingInStars + '</div>';
			stringOfHtml += '<figure class="book__image-wrap"><img class="book__image" src="' + book.img + '"></figure>';
			stringOfHtml += '<div class="book__meta"><span class="book__author">' + book.author + '</span>';
			stringOfHtml += '<span class="book__title">' + book.title + '</span>';
			stringOfHtml += '<span class="book__genres">';
			for (var y = 0; y < book.genre.length; y++) {
				var genre = book.genre[y];
				stringOfHtml += '<a class="book__genre" href="/book__genre-id' + genre.id + ' ">' + genre.title + '</a>';
			}
			stringOfHtml += '</span>';
			stringOfHtml += '</li>';
		}
		return stringOfHtml;
	}

	var listOfBooks = booksOutput(arrayOfBooks);

	$('.books-list').append(listOfBooks);
})();