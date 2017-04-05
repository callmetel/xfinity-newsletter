$(document).ready(function() {

	var showData = $('#intro-article');

    $.getJSON('article.json', function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.articleImage + ': ' + item.articleTitle;
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

      // showData.empty();

      if (items.length) {
        var content = items;
        // var list = $('<ul />').html(image[2] + ', ' + title[2] + ', ' + authName[2] + ', ' + authTitle[2] );
        // showData.append(list);
      


		/* ========= Article Titles ======== */

			var title1 = "The Voice of Research";
			var title2 = "Are You Talking to Me?";
			var title3 = "Our Digital First Language";
			var title4 = "The Word on Voice";

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

			// 
			var articleThreeIntro= '{ "articleImage" : "app/images/section-3-bg.jpg", "articleTitle" : "Our Digital First Language", "articleAuthorName" : "Heather Hollis", "articleAuthorTitle" : "Vice President, Experience Design", "articleIntroParagraph" : "Imagine a future where customers manage most of their XFINITY services by voice. Simply utter a request into an X1 Voice Remote, et voilà, you’ve purchased a movie, adjusted the lights, and discovered the best delivery service in town." }';

			var article3Intro = JSON.parse(articleThreeIntro);

			$('#article3-heading').css( 'background', '#000000 url(' + image[3] + ') no-repeat');
			$('#article3-title > .article-title').text(title[3]);
			$('#article3-title .name').text(authName[3]);
			$('#article3-title .title').text(authTitle[3]);
			$('#article3-title > p').html(paragraph[3]);


		/* =========== Article 4 ==============
		   ==================================== */

		   	/* Article 4 Introduction (with the background image)*/

			var articleFourIntro= '{ "articleImage" : "app/images/section-4-bg.jpg", "articleTitle" : "The Word on Voice", "articleAuthorName" : "Neil Epstein", "Senior Creative Director, Experience Design" : "Vice President, Experience Design", "articleIntroParagraph" : "As the list of voice-enabled devices grows, the segmentation among them can be clearly defined into three types of experiences." }';

			var article4Intro = JSON.parse(articleFourIntro);

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

		   	var introemail= '{ "emailLink" : "Thomas_Loretan@comcast.com", "emailName" : "Tom" }';
			var introEmail = JSON.parse(introemail);
		   
		   $('.email-link:eq(0)').attr('href', 'mailto:' + introEmail.emailLink);
		   $('.email-link:eq(0) .email-name').text(introEmail.emailName);


		   /* The email name and link for the the FIRST ARTICLE can be insereted here */
		   
		   	var emailOne= '{ "emailLink" : "Kyree_Holmes@comcast.com", "emailName" : "Kyree" }';
			var email1 = JSON.parse(emailOne);
		   
		   $('#article1 .contact-link').attr('href', 'mailto:' + email1.emailLink);
		   $('#article1 .contact-link .email-name').text(email1.emailName);


		   /* The email name and link for the the SECOND ARTICLE can be insereted here */
		   
		   	var emailTwo= '{ "emailLink" : "Steve_Leardi@comcast.com", "emailName" : "Steve" }';
			var email2 = JSON.parse(emailTwo);
		   
		   $('#article2 .contact-link').attr('href', 'mailto:' + email2.emailLink);
		   $('#article2 .contact-link .email-name').text(email2.emailName);


		   /* The email name and link for the the THIRD ARTICLE can be insereted here */
		   
		   	var emailThree= '{ "emailLink" : "Heather_Hollis@comcast.com", "emailName" : "Heather" }';
			var email3 = JSON.parse(emailThree);
		   
		   $('#article3 .contact-link').attr('href', 'mailto:' + email3.emailLink);
		   $('#article3 .contact-link .email-name').text(email3.emailName);


		   /* The email name and link for the the FOURTH ARTICLE can be insereted here */
		   
		   	var emailFour= '{ "emailLink" : "Neil_Epstein@comcast.com", "emailName" : "Neil" }';
			var email4 = JSON.parse(emailFour);
		   
		   $('#article4 .contact-link').attr('href', 'mailto:' + email4.emailLink);
		   $('#article4 .contact-link .email-name').text(email4.emailName);


		/* ========== PDF Links ========== 
		   =============================== */

		   var pdfLink = 'app/Comcast_XFINITY_UXDesignTeam_Newsletter_Print Version.pdf';

		   $('#pdf').attr('src', pdfLink);

	}
    });
});



