(function(){
	function MyCalc(element, options) {
		self = this;
		this.element = $(element);
		this.options = $.extend({}, MyCalc.Defaults, options);
		this.init();
		this.calc(false);
	}
	
	MyCalc.Defaults = {
		
	};

	MyCalc.prototype.init = function() {
		$(document).on('change', '#sc', function() {
			self.calc($(this).is(':checked'));
		});
	};
	
	MyCalc.prototype.minMaxValidate = function(target) {
		var min = parseInt(target.attr('min'));
		var max = parseInt(target.attr('max'));
		// для начала валидация
		var val = target.val().replace( /[^0123456789.-]/, '' );
		if(parseInt(val) > max) {
			return max;
		}
		if(parseInt(val) < min) {
			return min;
		}
		return val;
	};
	
	MyCalc.prototype.calc = function(sc) {
		var values = {};
		$.each(this.element.find('input[type="hidden"]'), function(i, v) {
			var item = $(v);
			values[item.attr('name')] = item.val().replace(/\s/g, '') * 1;
		});

		// 1
		// Остаточная стоимость
		s12 = values.s11 / 100 * values.s12;
		// Ежегодный пробег, км
		s14 = values.s13 * values.s14;
		
		// 2
		//Условия эксплуатации, город
		s21 = s14 / 100 * (values.s21 / 100) * values.s41 * values.s44;
		//Условия эксплуатации, трасса
		s22 = s14 / 100 * (values.s22 / 100) * values.s411 * values.s44;
		//Условия эксплуатации, рельеф
		s23 = s14 / 100 * (values.s23 / 100) * values.s412 * values.s44;
		
		// 3
		//Перегруз
		s34 = values.s34 / 5000
		//Загрузка, пустой
		s31 = s21 + (s21 * (values.s31 / 100) * 0.8);
		//Загрузка, груженный
		s32 = s22 + (s22 * (values.s32 / 100) * 1);
		//Загрузка, перегуруз
		s33 = s23 + (s23 * (values.s33 / 100) * 1.2) + (s23 * (values.s33 / 100) * 1.2 * s34);
		
		s3total = s31 + s32 + s33;
		
		// 4
		//Расход топлива город
		s41 = s14 * (values.s21 / 100) / 100 * values.s41;
		//Расход топлива трасса
		s42 = s14 * (values.s22 / 100) / 100 * values.s411;
		//Расход топлива рельеф
		s43 = s14 * (values.s23 / 100) / 100 * values.s412;
		//Стоимость топлива
		s44 = s31 + s32 + s33;
		//Расход AdBlue
		s45 = s14 / 100 * values.s45;
		//Стоимость AdBlue
		s46 = s45 * values.s46;
		
		//5
		//Техническое обслуживание
		s51 = values.s51;
		if(sc === true) {
			s51 = s51 * 0.9;
		}
		//Мойка
		s52 = values.s13 * 12 * values.s52;
		//Телематические системы
		s53 = values.s13 * 12 * values.s53;

		s5total = s51 + s52 + s53;

		//6
		//Кол-во замен за период эксплуатации
		if(values.s62 == 0) {
			s621 = 0;
		} else {
			s621 = Math.floor(values.s14 / values.s62);
		}
		//Количество шин
		//s61 = values.s61 * s621;
		s61 = 6 * s621;
		//Ресурс шин
		//Стоимость 1 шины
		s63 = s61 * values.s63;
		
		//7
		//Транспортный налог
		s71 = values.s13 * values.s71;
		//Техосмотр
		s72 = values.s13 * values.s72;
		//Страхование ОСАГО
		s73 = values.s13 * values.s73;
		//Страхование КАСКО
		s74 = values.s13 * values.s74;
		//Платные дороги
		s75 = values.s13 * values.s75;
		//Парковки
		s76 = values.s13 * values.s76;
		//Прочие сборы
		s77 = values.s13 * values.s77;
		
		s7total = s71 + s72 + s73 + s74 + s75 + s76 + s77;

		//8
		//Административные расходы
		s81 = values.s13 * 12 * values.s81;
		//З\п водителя
		s82 = values.s13 * 12 * values.s82;
		//Сотовая связь
		s83 = values.s13 * 12 * values.s83;
		
		s8total = s81 + s82 + s83;
		
		//9
		//Стоимость перевозок
		s91 = values.s91 * s14;
		//Стоимость сдачи в аренду транспортных средств
		s92 = values.s92 * values.s13 * 365 * 24;

		total = s12 + s46 + s5total + s63 + s7total + s8total + s31 + s32 + s33;
		
		res_tb_g = (total * values.s13) / (s14 * values.s91);
		res_tb_r = (total * values.s13) / (s14 * values.s92 / 365 / 24);
		
		var add = {
			'res_tb_g' : res_tb_g,
			'res_tb_r' : res_tb_r,
		};
		
		
		var res = [];
		var chart = [];
		
		res.push({
			'name' : 'Полная стоимость владения',
			'class' : '',
			'value' : total
		});
		res.push({
			'name' : 'Стоимость владения в год',
			'class' : '',
			'value' : total / values.s13
		});
		res.push({
			'name' : 'Стоимость владения в месяц',
			'class' : '',
			'value' : total / (values.s13 * 12)
		});
		res.push({
			'name' : 'Стоимость владения в день',
			'class' : '',
			'value' : total / (values.s13 * 365)
		});
		res.push({
			'name' : 'Стоимость владения',
			'class' : '',
			'value' : total / s14
		});
		
		
		chart.push({
			'name' : 'Амортизация',
			'color' : 'rgba(255, 99, 132, 0.6)',
			'value' : values.s11 - s12
		});
		chart.push({
			'name' : 'Расход ГСМ город',
			'color' : 'rgba(54, 162, 235, 0.6)',
			'value' : s31
		});
		chart.push({
			'name' : 'Расход ГСМ трасса',
			'color' : 'rgba(255, 206, 86, 0.6)',
			'value' : s32
		});
		chart.push({
			'name' : 'Расход ГСМ рельеф',
			'color' : 'rgba(75, 192, 192, 0.6)',
			'value' : s33
		});
		chart.push({
			'name' : 'Расходы на обслуживание',
			'color' : 'rgba(153, 102, 255, 0.6)',
			'value' : s5total
		});
		chart.push({
			'name' : 'Расход на шины',
			'color' : 'rgba(255, 159, 64, 0.6)',
			'value' : s63
		});
		chart.push({
			'name' : 'Налоги и сборы',
			'color' : 'rgba(255, 99, 132, 0.6)',
			'value' : s7total
		});
		chart.push({
			'name' : 'Персонал',
			'color' : 'rgba(54, 162, 235, 0.6)',
			'value' : s8total
		});
		/*chart.push({
			'name' : 'Расход AdBlue',
			'color' : '',
			'value' : s45
		});*/
		
		this.createRes(res, chart, add);
	};
	
	MyCalc.prototype.createRes = function(res, chart, add) {
		var self = this;
		var wrap = $('.summary');
		wrap.html('');
		
		// когда-то это всё отображалось прям сразу
		

		arNames = [];
		arVals = [];
		arColors = [];
		$.each(res, function(i, v) {
			wrap.append("<div class='row mt-3 " + v.class + "'>" +
			"<div class='col text-right'>" + v.name + "</div>" +
			"<div class='col'>" + self.number_format(v.value, 0, '.', ' ') + " руб.</div>" +
			"</div>");
		});
		
		$.each(chart, function(i, v) {
			arNames.push(v.name);
			arVals.push(Math.round(v.value));
			arColors.push(v.color);
			/*var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			arColors.push("rgba(" + r + "," + g + "," + b + ", 0.6)");*/
		});
		
		var ctx = document.getElementById("myChart").getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				datasets: [{
					label: 'Полная стоимость владения автомобилем',
					data: arVals,
					backgroundColor: arColors
				}],
				labels: arNames
			}
		});
		
		$.each(add, function(i, v) {
			if(isFinite(v)) {
				$('.' + i).text(v.toFixed(1)).show();
			} else {
				$('.' + i).parent().hide();
			}
		});
	};
	
	MyCalc.prototype.number_format = function(number, decimals, dec_point, thousands_sep) {
		// 
		// +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
		// +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// +	 bugfix by: Michael White (http://crestidg.com)

		var i, j, kw, kd, km;

		// input sanitation & defaults
		if( isNaN(decimals = Math.abs(decimals)) ){
			decimals = 2;
		}
		if( dec_point == undefined ){
			dec_point = ",";
		}
		if( thousands_sep == undefined ){
			thousands_sep = ".";
		}

		i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

		if( (j = i.length) > 3 ){
			j = j % 3;
		} else{
			j = 0;
		}

		km = (j ? i.substr(0, j) + thousands_sep : "");
		kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
		//kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
		kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


		return km + kw + kd;
	};
	
	$.fn.MyCalc = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('my.calc');

			if (!data) {
				data = new MyCalc(this, typeof option == 'object' && option);
				$this.data('my.calc', data);
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};
})();