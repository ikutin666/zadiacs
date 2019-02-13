/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        //объект знаков зодиаков
        


var $=require('jquery');
var  func=require('./set.js');
 
$('#bt1').on('click',function(event)
	{
		func.conversion(this);
		
	});
	
$('#date1').on('change',function(event)
	{
		func.get_zodiac(this);
		
	});

$('#pass1').on('click',function(event)
	{
		func. submit();
		
	});	