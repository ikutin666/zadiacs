/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        //объект знаков зодиаков
        


var $=require('jquery');
var  func=require('./set.js');
require('style-loader!css-loader!../css/css.css');
require('style-loader!css-loader!../css/kickstart-buttons.css');
require('style-loader!css-loader!../css/kickstart-forms.css'); 
$('#bt1').on('click',function(event)
	{
		$('#sp1').val(func.conversion($('#sp').val()));
		
	});
	
$('#date1').on('change',function(event)
	{
		$('#zad').text("ваш знак задиака "+func.get_zadiac($('#date1').val()));
		
	});

$('#pass1').on('click',function(event)
	{
		func. submit("#login","#pass","#background","/blank.html");
		
	});	