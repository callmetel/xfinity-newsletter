$(document).ready(function() {

	var showData = $('#intro-article');

    $.getJSON('article.json', function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.articleImage + ': ' + item.articleTitle;
      });

      var links = data.links.map(function (link) {
        return link.pdfLink;
      });

      var image = data.items.map(function (item) {
        return item.articleImage;
      });
      var title = data.items.map(function (item) {
        return item.articleTitle;
      });
      var authName = data.items.map(function (item) {
        return item.articleAuthorName;
      });
      var authTitle = data.items.map(function (item) {
        return item.articleAuthorTitle;
      });
      var paragraph = data.items.map(function (item) {
        return item.articleIntroParagraph;
      });
      var emaillink = data.items.map(function (item) {
        return item.emailLink;
      });
      var emailname = data.items.map(function (item) {
        return item.emailName;
      });
      var pdf = data.links.map(function (link) {
        return link.pdfLink;
      });

      // showData.empty();

      if (items.length) {
        // var content = items;
        // var list = $('<ul />').html(image[2] + ', ' + title[2] + ', ' + authName[2] + ', ' + authTitle[2] );
        // showData.append(list);
      

		// For Quotation Marks Please Use the HTML

		/* ============== Introduction Article =============
		   ================================================= */

		   	/* First Text After XD Logo scrolls away */

			$('#intro').css( 'background-image', 'url(' + image[0] + ')');
			$('#intro-article > .article-title').text(title[0]);
			$('#intro-article .name').text(authName[0]);
			$('#intro-article .title').text(authTitle[0]);
			$('#intro-article > p').html(paragraph[0]);

		/* =========== Article 1 ==============
		   ==================================== */

		   	/* Article 1 Introduction (with the background image)*/

			$('#article1-heading').css( 'background', '#000000 url(' + image[1] + ') no-repeat');
			$('#article1-title > .article-title').text(title[1]);
			$('#article1-title .name').text(authName[1]);
			$('#article1-title .title').text(authTitle[1]);
			$('#article1-title > p').html(paragraph[1]);


		/* =========== Article 2 ==============
		   ==================================== */

		   	/* Article 2 Introduction (with the background image)*/

			$('#article2-heading').css( 'background', '#000000 url(' + image[2] + ') no-repeat');
			$('#article2-title > .article-title').text(title[2]);
			$('#article2-title .name').text(authName[2]);
			$('#article2-title .title').text(authTitle[2]);
			$('#article2-title > p').html(paragraph[2]);


		/* =========== Article 3 ==============
		   ==================================== */

		   	/* Article 3 Introduction (with the background image)*/

			$('#article3-heading').css( 'background', '#000000 url(' + image[3] + ') no-repeat');
			$('#article3-title > .article-title').text(title[3]);
			$('#article3-title .name').text(authName[3]);
			$('#article3-title .title').text(authTitle[3]);
			$('#article3-title > p').html(paragraph[3]);


		/* =========== Article 4 ==============
		   ==================================== */

		   	/* Article 4 Introduction (with the background image)*/

			$('#article4-heading').css( 'background', '#000000 url(' + image[4] + ') no-repeat');
			$('#article4-title > .article-title').text(title[4]);
			$('#article4-title .name').text(authName[4]);
			$('#article4-title .title').text(authTitle[4]);
			$('#article4-title > p').html(paragraph[4]);


		/* ========== Change Navigation Titles ========== 
		   ============================================== */

			$('p[data-title="1"]').text(title[1]);
			$('p[data-title="2"]').text(title[2]);
			$('p[data-title="3"]').text(title[3]);
			$('p[data-title="4"]').text(title[4]);


		/* ========== Email Addresses ========== 
		   ===================================== */

		   // Set Email Names & Links
		   
		   	
		   /* The email name and link for the INTRODUCTION ARTICLE can be insereted here */

		   $('.email-link:eq(0)').attr('href', 'mailto:' + emaillink[0]);
		   $('.email-link:eq(0) .email-name').text(emailname[0]);


		   /* The email name and link for the the FIRST ARTICLE can be insereted here */
		   
		   $('#article1 .contact-link').attr('href', 'mailto:' + emaillink[1]);
		   $('#article1 .contact-link .email-name').text(emailname[1]);


		   /* The email name and link for the the SECOND ARTICLE can be insereted here */
		   
		   $('#article2 .contact-link').attr('href', 'mailto:' + emaillink[2]);
		   $('#article2 .contact-link .email-name').text(emailname[2]);


		   /* The email name and link for the the THIRD ARTICLE can be insereted here */
		   
		   $('#article3 .contact-link').attr('href', 'mailto:' + emaillink[3]);
		   $('#article3 .contact-link .email-name').text(emailname[3]);


		   /* The email name and link for the the FOURTH ARTICLE can be insereted here */
		   
		   $('#article4 .contact-link').attr('href', 'mailto:' + emaillink[4]);
		   $('#article4 .contact-link .email-name').text(emailname[4]);


		/* ========== PDF Links ========== 
		   =============================== */

		   $('#pdf').attr('src', pdf);

		}
    });
});



