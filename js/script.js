$('#btn').click(function(){
	var txt = $('#txt').val();
	var replace =
		txt.replace(/[À]/g, '&Agrave;')
			.replace(/[à]/g, '&agrave;')
			.replace(/[Â]/g, '&Acirc;')
			.replace(/[â]/g, '&acirc;')
			.replace(/[Ç]/g, '&Ccedil;')
			.replace(/[ç]/g, '&ccedil;')
			.replace(/[È]/g, '&Egrave;')
			.replace(/[è]/g, '&egrave;')
			.replace(/[É]/g, '&Eacute;')
			.replace(/[é]/g, '&eacute;')
			.replace(/[Ê]/g, '&Ecirc;')
			.replace(/[ê]/g, '&ecirc;')
			.replace(/[Î]/g, '&Icirc;')
			.replace(/[Ô]/g, '&Ocirc;')
			.replace(/[ô]/g, '&ocirc;')
			.replace(/[Ù]/g, '&Ugrave;')
			.replace(/[ù]/g, '&ugrave;')
			.replace(/[Û]/g, '&Ucirc;')
			.replace(/[û]/g, '&ucirc;')
			.replace(/®/g, '<sup style="font-size:10px; line-height:0">&reg;</sup>')
			.replace(/©/g, '<sup style="font-size:10px; line-height:0">&copy;</sup>')
			.replace(/“/g, '&ldquo')
			.replace(/”/g, '&rdquo')
			.replace(/\n/g, '<br>\r');

	$('#result').val(replace);
});
