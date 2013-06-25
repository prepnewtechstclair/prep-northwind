$(function(){
	var $startButton = $('#startButton');
	var $menu = $('#menu');
	var $productsButton = $('#productsButton');
	var $productsForm = $('#productsForm');
	$($startButton).on('click',function(){
		if( $(this).text() == "Start")
		{
			$(this).text('Close');
			if( $($menu).is(":hidden")){
				$menu.slideDown("fast",function(){
					$($productsButton).on("click",function(){
						var position = $productsForm.position();
						if(position.left == -322){
							$productsForm.stop().animate({ left: '0px' }, 'slow', 'easeOutBounce');
						}else{
							$productsForm.stop().animate({ left: '-322px' }, 'slow');
						}
					})	
				});
			}
		}else{
			$(this).text('Start');
			$menu.slideUp("fast");
		}
	});
});