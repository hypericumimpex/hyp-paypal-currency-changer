jQuery(document).ready(function() {
	jQuery( ".settings-error" ).hide();

	jQuery('#selected_currency').val(currency() + ' ' + php_data.target_currency + '/' + php_data.source_currency);
	if (jQuery('#cr').val()==currency()){
		jQuery('#cr').css('color', 'green');
	}else{
		jQuery('#cr').css('color', 'red');
		jQuery( ".settings-error" ).show();
	}
});
jQuery(function(){
	// Tooltips
	jQuery(".tips, .help_tip").tipTip({
    	'attribute' : 'data-tip',
    	'fadeIn' : 50,
    	'fadeOut' : 50,
    	'delay' : 200
    });
});

//Change target Currency
	jQuery('#target_curr').change(function() {
		jQuery(this).parents('form').submit();
	});
//Accept Currency
	jQuery('#selected_currency').click(function() {
	jQuery('#cr').val(currency());
	jQuery('#cr').css('color', 'green');
	});		

function currency(){
	var curr=php_data.amount;
	return curr;
}