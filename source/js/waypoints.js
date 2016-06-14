var $dipper = $('.dipper');

$dipper.waypoint(function(direction){
 	console.log('Waypoint!');
 	if(direction == 'down'){
 	console.log('Add class!');
 	$dipper.addClass('js-dipper-animate');
}else{
	console.log('Remove class!');
	$dipper.removeClass('js-dipper-animate');

}
 	// add an objectoffset
 },{ offset: '80%' });