$(document).ready(function(){
(function(){
	function MyCalc(element, options) {
		self = this;
		this.element = $(element);
		this.options = $.extend({}, MyCalc.Defaults, options);
		this.init();
		this.inputsWrap;
		this.createInputs();
		this.activeTab;
		this.activeContent;
	}
	
	MyCalc.Defaults = {
		'model' : {
			0 : {
				'model' : 'CANTER TF 7.5т',
				'image' : '150.jpg',
				'engine' : '150'
			},
			1 : {
				'model' : 'CANTER TF 8.55т',
				'image' : '175.jpg',
				'engine' : '175'
			}
		},
		'steps' : [
			{
				'name' : 'Инвестиции и эксплуатация',
				'image' : 'images/steps/1.png',
				'items' : [
					{
						'name' : 's11',
						'description' : 'Стоимость приобретения , руб',
						'title' : 'Стоимость приобретаемого транспортного средства',
						'min' : '0',
						'max' : '20000000',
						'default' : '0',
						'default_v2' : '2587000',
						'step' : '1000'
					},
					{
						'name' : 's12',
						'description' : 'Остаточная стоимость, %',
						'title' : 'Стоимость транспортного средства в конце срока эксплуатации',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '70',
						'step' : '1'
					},
					{
						'name' : 's13',
						'description' : 'Период эксплуатации, год',
						'title' : 'Время эксплуатации транспортного средства',
						'min' : '0',
						'max' : '15',
						'default' : '0',
						'default_v2' : '5',
						'step' : '1',
						'onChange' : function() {
							val = $('input[name="s14"]').val() * $('input[name="s13"]').val() / 12 * 1.15;
							val = self.formated(val);
							$('input[name="s51"]').val(val);
						}
					},
					{
						'name' : 's14',
						'description' : 'Ежегодный пробег, км.',
						'title' : 'Пробег транспортного средства за год',
						'min' : '0',
						'max' : '250000',
						'default' : '0',
						'default_v2' : '50000',
						'step' : '100',
						'onChange' : function() {
							val = $('input[name="s14"]').val() * $('input[name="s13"]').val() / 12 * 1.15;
							val = self.formated(val);
							$('input[name="s51"]').val(val);
						}
					}
				]
			},
			{
				'name' : 'Условия эксплуатации',
				'image' : 'images/steps/1-1.png',
				'items' : [
					{
						'name' : 's21',
						'description' : 'Эксплуатация в режиме город, %',
						'title' : 'Эксплуатация в режиме город в % соотношении',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '15',
						'step' : '1',
					},
					{
						'name' : 's22',
						'description' : 'Эксплуатация в режиме трасса, %',
						'title' : 'Эксплуатация в режиме трасса в % соотношении ',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '50',
						'step' : '1',
					},
					{
						'name' : 's23',
						'description' : 'Из которых эксплуатация с учетом рельефа, %',
						'title' : 'Эксплуатация с учетом рельефной местности выраженная в % от режимов экплуатации город + трасса',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '35',
						'step' : '1',
						'disabled' : true
					}
				]
			},
			{
				'name' : 'Загрузка',
				'image' : 'images/steps/1-3.png',
				'items' : [
					{
						'name' : 's31',
						'description' : 'Загрузка, снаряженная масса, %',
						'title' : 'Обратное плечо (автомобиль используется без груза)',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '20',
						'step' : '1'
					},
					{
						'name' : 's32',
						'description' : 'Загрузка, полная масса, %',
						'title' : 'Автомобиль используется согласно разрешенной полной массе по ПТС',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '75',
						'step' : '1'
					},
					{
						'name' : 's33',
						'description' : 'Загрузка, перегруз, %',
						'title' : 'Автомобиль используется с перегрузом',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '5',
						'step' : '1'
					},
					{
						'name' : 's34',
						'description' : 'Перегруз, кг.',
						'title' : 'На сколько автомобиль перезагружен сверх разрешенной грузоподъемности',
						'min' : '0',
						'max' : '5000',
						'default' : '0',
						'default_v2' : '500',
						'step' : '1'
					}
				]
			},
			{
				'name' : 'Топливо',
				'image' : 'images/steps/2.png',
				'items' : [
					{
						'name' : 's41',
						'description' : 'Расход топлива город, л/100км',
						'title' : 'Количество израсходованного топлива на 100 км. Показатель 16,2л с кондиционером был достигнут при оптимальных условиях эксплуатации.В базовую комплектацию входит кондицонер.',
						'min' : '0',
						'max' : '50',
						'default' : '0',
						'default_v2' : '14.9',
						'step' : '0.01',
						'after' : function() {
							return "<div class='row mb-2'>" +
									"<div class='col-9'>Расход топлива трасса, л/100км</div>" +
									"<div class='col-3 value text-right'><input type='text' name='s411' class='form-control form-control-sm' readonly></div>" +
								"</div>" +
								"<div class='row mb-2'>" +
									"<div class='col-9'>Расход топлива рельеф, л/100км</div>" +
									"<div class='col-3 value text-right'><input type='text' name='s412' class='form-control form-control-sm' readonly></div>" +
								"</div>";
						},
						'onChange' : function() {
							val = $('input[name="s41"]').val();
							$('input[name="s411"]').val((val * 0.9).toFixed(2));
							$('input[name="s412"]').val((val * 1.1).toFixed(2)); //.toFixed(1)
						}
					},
					{
						'name' : 's44',
						'description' : 'Стоимость топлива, руб/литр',
						'title' : 'Стоимость 1 литра топлива',
						'min' : '0',
						'max' : '150',
						'default' : '0',
						'default_v2' : '44',
						'step' : '1'
					},
					{
						'name' : 's45',
						'description' : 'Расход AdBlue, л/100 км.',
						'title' : 'Количество израсходованной мочевины на 100 км. Показатель 0,2л  был достигнут при оптимальных условиях эксплуатации.',
						'min' : '0',
						'max' : '1',
						'default' : '0',
						'default_v2' : '0.3',
						'step' : '0.1'
					},
					{
						'name' : 's46',
						'description' : 'Стоимость AdBlue, руб/литр',
						'title' : 'Стоимость 1 литра мочевины (AdBlue)',
						'min' : '0',
						'max' : '200',
						'default' : '0',
						'default_v2' : '300',
						'step' : '1',
						'after' : function() {
							return "<div class='row mb-2'><div class='col-12'>" +
									/*"<label class='mr-3'><input type='checkbox' name='s4-add' class=''> Кондиционер</label>" +*/
									"<label><input type='checkbox' name='s4-remove' class=''> Спойлер</label>" +
								"</div></div>";
						}
					}
				]
			},
			{
				'name' : 'Обслуживание',
				'image' : 'images/steps/3.png',
				'items' : [
					{
						'name' : 's51',
						'description' : 'Техническое обслуживание, руб/месяц',
						'title' : 'Затраты на техническое обслуживание из расчета 1,15 руб. на 1 км.',
						'min' : '0',
						'max' : '99999',
						'default' : '0',
						'default_v2' : '15000',
						'step' : '10',
						'disabled' : true,
					},
					{
						'name' : 's52',
						'description' : 'Мойка, руб/месяц',
						'title' : 'Затраты на мойку',
						'min' : '0',
						'max' : '30000',
						'default' : '0',
						'default_v2' : '1000',
						'step' : '1'
					},
					{
						'name' : 's53',
						'description' : 'Телематические системы, руб/мес.',
						'title' : 'Затраты на абонентскую плату',
						'min' : '0',
						'max' : '9999',
						'default' : '0',
						'default_v2' : '500',
						'step' : '10'
					}
				]
			},
			{
				'name' : 'Шины',
				'image' : 'images/steps/4.png',
				'items' : [
					/*{
						'name' : 's61',
						'description' : 'Количество шин, шт.',
						'title' : 'Количество шин необходимое на период эксплуатации. В автомобиле 6 шин подвергаются одновременной замене.',
						'min' : '6',
						'max' : '18',
						'default' : '0',
						'default_v2' : '6',
						'step' : '6'
					},*/
					{
						'name' : 's62',
						'description' : 'Ресурс шин, км.',
						'title' : 'Максимальный износ протектора, км. Импортные шины в среднем проходят 150 000км.',
						'min' : '0',
						'max' : '250000',
						'default' : '0',
						'default_v2' : '150000',
						'step' : '1',
						/*'after' : function() {
							return "<div class='row mb-2'>" +
									"<div class='col-9'>Количество замен за период эксплуатации</div>" +
									"<div class='col-3 value text-right'><input type='text' name='s621' class='form-control form-control-sm' readonly></div>" +
								"</div>";
						},
						'onChange' : function() {
							if($('input[name="s62"]').val() == 0) {
								var val = 0;
							} else {
								var val = ($('input[name="s13"]').val() * $('input[name="s14"]').val()) / $('input[name="s62"]').val();
							}
							$('input[name="s621"]').val(Math.floor(val));
						}*/
					},
					{
						'name' : 's63',
						'description' : 'Стоимость одной шины, руб.',
						'title' : 'Стоимость одной шины транспортного средств',
						'min' : '0',
						'max' : '50000',
						'default' : '0',
						'default_v2' : '15000',
						'step' : '10'
					}
				]
			},
			{
				'name' : 'Налоги и сборы',
				'image' : 'images/steps/5.png',
				'items' : [
					{
						'name' : 's71',
						'description' : 'Транспортный налог, руб/год',
						'title' : 'Сумма транспортного налога',
						'min' : '0',
						'max' : '50000',
						'default' : '0',
						'default_v2' : '15000',
						'step' : '1'
					},
					{
						'name' : 's72',
						'description' : 'Техосмотр, руб/год',
						'title' : 'Стоимость проверки технического состояния транспортных средств (ТС), на предмет их соответствия обязательным требованиям безопасности транспортных средств в целях допуска транспортных средств к участию в дорожном движении на территории Российской Федерации',
						'min' : '0',
						'max' : '10000',
						'default' : '0',
						'default_v2' : '5000',
						'step' : '1'
					},
					{
						'name' : 's73',
						'description' : 'Страхование ОСАГО, руб/год',
						'title' : 'Стоимость обязательного страхования автогражданской ответственности',
						'min' : '0',
						'max' : '30000',
						'default' : '0',
						'default_v2' : '15000',
						'step' : '1'
					},
					{
						'name' : 's74',
						'description' : 'Страхование КАСКО, руб/год',
						'title' : 'Стоимость страхования автомобилей от ущерба, хищения или угона. ',
						'min' : '0',
						'max' : '300000',
						'default' : '0',
						'default_v2' : '50000',
						'step' : '1'
					},
					{
						'name' : 's75',
						'description' : 'Платные дороги, руб/год',
						'title' : 'Затраты на платные дороги',
						'min' : '0',
						'max' : '99999',
						'default' : '0',
						'default_v2' : '5000',
						'step' : '1'
					},
					{
						'name' : 's76',
						'description' : 'Парковки, руб/год',
						'title' : 'Затраты на платные парковки',
						'min' : '0',
						'max' : '99999',
						'default' : '0',
						'default_v2' : '20000',
						'step' : '1'
					},
					{
						'name' : 's77',
						'description' : 'Прочие расходы, руб/год',
						'title' : 'Любые дополнительные расходы',
						'min' : '0',
						'max' : '100000',
						'default' : '0',
						'default_v2' : '10000',
						'step' : '1'
					}
				]
			},
			{
				'name' : 'Персонал',
				'image' : 'images/steps/6.png',
				'items' : [
					{
						'name' : 's81',
						'description' : 'Административные расходы, руб/мес',
						'title' : 'Административные расходы -  это оперционные затраты компании',
						'min' : '0',
						'max' : '100000',
						'default' : '0',
						'default_v2' : '10000',
						'step' : '10'
					},
					{
						'name' : 's82',
						'description' : 'Зарплата водителя, руб/мес',
						'title' : 'Размер заработной платы',
						'min' : '0',
						'max' : '200000',
						'default' : '0',
						'default_v2' : '50000',
						'step' : '10'
					},
					{
						'name' : 's83',
						'description' : 'Сотовая связь, руб/мес.',
						'title' : 'Стоимость, которую платит работодатель за использование телефонной связью',
						'min' : '0',
						'max' : '9999',
						'default' : '0',
						'default_v2' : '1000',
						'step' : '10'
					}
				]
			},
			{
				'name' : 'Доход',
				'image' : 'images/steps/1-2.png',
				'items' : [
					{
						'name' : 's91',
						'description' : 'Стоимость перевозок, руб/км',
						'title' : 'Коммерческий тариф за грузоперевозки',
						'min' : '0',
						'max' : '100',
						'default' : '0',
						'default_v2' : '30',
						'step' : '1'
					},
					{
						'name' : 's92',
						'description' : 'Стоимость аренды транспортных средств руб/час',
						'title' : 'Коммерческий тариф за аренду транспортного средства',
						'min' : '0',
						'max' : '10000',
						'default' : '0',
						'default_v2' : '55',
						'step' : '1'
					}
				]
			}
		],
	};
	
	MyCalc.prototype.init = function() {
		$(document).on('change', 'input[name^="s2"]', function() {
			var target = $(this);
			var cur = target.attr('name');
			var values = {};
			$.each($('input[name^="s2"]'), function(i, v) {
				var item = $(v);
				if(item.attr('name') == cur) {
					values[item.attr('name')] = target.val();
				} else {
					values[item.attr('name')] = item.val();
				}
			});
			
			sum = parseInt($('input[name^="s21"]').val()) + parseInt($('input[name^="s22"]').val()) + parseInt($('input[name^="s23"]').val());

			switch(cur) {
				case 's21':
					$('input[name^="s22"]').val(100 - $('input[name^="s23"]').val() - target.val());
					$('input[name^="s23"]').val(0);
					break;
				case 's22':
					total = 100 - parseInt($('input[name^="s21"]').val());
					if(target.val() > total) {
						target.val(total);
						$('input[name^="s23"]').val(0);
					} else {
						$('input[name^="s23"]').val(100 - $('input[name^="s21"]').val() - target.val());
					}
					break;
			}
		});
		$(document).on('change', 'input[name^="s9"]', function() {
			var target = $(this);
			var cur = target.attr('name');
			switch(cur) {
				case 's91':
					$('input[name="s92"]').val(0);
					break;
				case 's92':
					$('input[name="s91"]').val(0);
					break;
			}
		});
		
		$(document).on('change', 'input[name^="s4-"]', function() {
			var target = $(this);
			var mod = $('input[name="s41"]');
			var val = parseFloat(mod.val());
			switch(target.attr('name')) {
				case 's4-add':
					if(target.is(':checked')) {
						val = val + 1;
					} else {
						val = val - 1;
					}
					break;
				case 's4-remove':
					if(target.is(':checked')) {
						val = val - 1;
					} else {
						val = val + 1;
					}
					break;
			}
			if(val < 0) {
				val = 0;
			}
			mod.val(val);
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
	
	MyCalc.prototype.formated = function(val) {
		return self.number_format(val, 0, '.', ' ');
	}
	
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
	
	MyCalc.prototype.createInputs = function() {
		this.element.append('<form method="GET" action="res/" enctype="multipart/form-data">');
		post = this.element.find('form');
		if(typeof this.options.steps == 'object') {
			this.inputsWrap = this.element;
			var runFunc = [];
			$.each(this.options.steps, function(i, v) {
				var step = $("<div class='steps'><div class='row'>" +
					"<div class='col-12 col-md-2 text-center'><div class='head font-weight-bold mb-2'>" + v.name + "</div><img src='" + v.image + "' alt=''></div>" +
					"<div class='col-12 col-md-10 iner'></div>" +
					"</div></div>");
				
				var iner = step.find('.iner');
				if(typeof v.items == 'object') {
					$.each(v.items, function(i, v) {
						if(typeof v.step !== 'undefined') {
							var step = v.step;
						} else {
							var step = 1;
						}
						iner.append("<div class='row mb-2 align-items-center'>" +
							"<div class='col-12'>" + v.description + " <span data-toggle='tooltip' title='" + v.title + "'>?</span></div>" + 
							"<div class='col-9'>" + 
								"<input name='" + v.name + "' type='range' class='range' value='" + v.default + "' min='" + v.min + "' max='" + v.max + "' step='" + step + "' " + (v.disabled ? "disabled" : "") + ">" +
							"</div>" +
							"<div class='col-3 value text-right'>" + 
								"<input name='" + v.name + "' type='text' class='form-control static form-control-sm' value='" + v.default + "' min='" + v.min + "' max='" + v.max + "' step='" + step + "' " + (v.disabled ? "readonly" : "") + ">" + 
							"</div></div>");
						if(typeof v.after == 'function') {
							iner.append(v.after());
						}
						if(typeof v.onChange == 'function') {
							$(document).on('change', 'input[name="' + v.name + '"]', v.onChange);
							runFunc.push(v.onChange);
						}
					});
				}
				
				post.append(step);
			});
			$.each(runFunc, function(i, v) {
				v();
			});
			$(document).on('keyup', '.static', function() {
				val = self.minMaxValidate($(this));
				val = self.formated(val);
				$('input[type="range"][name="'+$(this).attr('name')+'"]').val(val);
			});
			$(document).on('change', '.range', function() {
				val = self.minMaxValidate($(this));
				val = self.formated(val);
				$('input[type="text"][name="'+$(this).attr('name')+'"]').val(val);
			});
		}
		
		post.append('<div class="submit mt-3"><button class="btn btn-red res">Расчитать</button></div>');
		this.element.append("<div class='tso-res'></div>");
		
		/*$(document).on('click', '.res', function() {
			self.calc();
		});*/
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

$('#tso').MyCalc();
});