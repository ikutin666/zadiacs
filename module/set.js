
var $=require('jquery');

exports.func={
			zodiacs:{ 
				1:{start:"21.01",end:"20.02",name:'Водолей',previous:12,next:2},
				2:{start:"21.02",end:"20.03",name:'Рыбы',previous:1,next:3},
				3:{start:"21.03",end:"20.04",name:'Овен',previous:2,next:4},
				4:{start:"21.04",end:"20.05",name:'Телец',previous:3,next:5},
				5:{start:"21.05",end:"20.06",name:'Близнецы',previous:4,next:6},
				6:{start:"22.06",end:"22.07",name:'Рак',previous:5,next:7},
				7:{start:"23.07",end:"23.08",name:'Лев',previous:6,next:8},
				8:{start:"24.08",end:"23.09",name:'Дева',previous:7,next:9},
				9:{start:"24.09",end:"23.10",name:'Весы',previous:8,next:10},
				10:{start:"24.10",end:"22.11",name:'Скорпион',previous:9,next:11},
				11:{start:"23.11",end:"21.12",name:'Стрелец',previous:10,next:12},
				12:{start:"22.12",end:"20.01",name:'Козерог',previous:11,next:13},
				get_name:function(value)
				{
						
					//разбиваем даты
					var index=Number.parseInt(value[1]);//определяем индекс как число месяца
					var start=this[index].start.split('.');
					var end=this[index].end.split('.');
				
					if(Number.parseInt(start[0])<=Number.parseInt(value[2]))//если введенный дата дальше начальной даты
					{
				 
						return this[index].name; //возвращаем знак зодиака
					}
			   
					if(Number.parseInt(start[0])>Number.parseInt(value[2])) //если введенный дата меньше начальной даты
					{
				   
						console.log('previous');
						return this[this[index].previous].name; // возвращаем знак зодиака прошлого месяца
					}
					if(Number.parseInt(end[0])<Number.parseInt(value[2])) //если введенный дата больше конечной даты
					{
						console.log('next');
						return this[this[index].next].name; // возвращаем знак зодиака следующего месяца
					}  
		   
		   
		   
				}      
			},
	
	
	
	get_zodiac: function(zo)
    {
        try
        {
            var val=zo.value.split("-"); //разбиваем дату
			console.log(func.zodiacs.get_name(val));
            return func.zodiacs.get_name(val);
        }
        catch(e)
        {
            console.log(e);
        }
    },  
}   