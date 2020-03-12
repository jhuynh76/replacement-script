$('#btn').click(function(){
	var txt = $('#txt').val();
	var replace = txt
		.replace(/[Á]/g, '&Aacute;')
		.replace(/[á]/g, '&aacute;')
		.replace(/[À]/g, '&Agrave;')
		.replace(/[à]/g, '&agrave;')
		.replace(/[Â]/g, '&Acirc;')
		.replace(/[â]/g, '&acirc;')

		.replace(/[É]/g, '&Eacute;')
		.replace(/[é]/g, '&eacute;')
		.replace(/[È]/g, '&Egrave;')
		.replace(/[è]/g, '&egrave;')
		.replace(/[Ê]/g, '&Ecirc;')
		.replace(/[ê]/g, '&ecirc;')

		.replace(/[Í]/g, '&Iacute;')
		.replace(/[í]/g, '&iacute;')
		.replace(/[Ì]/g, '&Igrave;')
		.replace(/[ì]/g, '&igrave;')
		.replace(/[Î]/g, '&Icirc;')
		.replace(/[î]/g, '&icirc;')

		.replace(/[Ó]/g, '&Oacute;')
		.replace(/[ó]/g, '&oacute;')
		.replace(/[Ò]/g, '&Ograve;')
		.replace(/[ò]/g, '&ograve;')
		.replace(/[Ô]/g, '&Ocirc;')
		.replace(/[ô]/g, '&ocirc;')

		.replace(/[Ú]/g, '&Uacute;')
		.replace(/[ú]/g, '&uacute;')
		.replace(/[Ù]/g, '&Ugrave;')
		.replace(/[ù]/g, '&ugrave;')
		.replace(/[Û]/g, '&Ucirc;')
		.replace(/[û]/g, '&ucirc;')

		.replace(/[Ç]/g, '&Ccedil;')
		.replace(/[ç]/g, '&ccedil;')

		.replace(/®/g, '<sup style="font-size:10px;">&reg;</sup>')
		.replace(/©/g, '<sup style="font-size:10px;">&copy;</sup>')
		.replace(/“/g, '&ldquo')
		.replace(/”/g, '&rdquo')
		.replace(/\n/g, '<br>\r');

	$('#result').val(replace);
});
