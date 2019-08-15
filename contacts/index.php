<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Контакты. Телефоны: Коммерческий отдел: +7 (495) 967-94-28  Техническое обслуживание: +7 (495) 287-46-99  E-mail: info@fuso-ak.ru");
$APPLICATION->SetPageProperty("title", "Контакты");
$APPLICATION->SetTitle("Контакты");
//LocalRedirect("/company/in-russia/");
?><style>
	.myFeedBack {
		background: #E3000F;
		text-transform: uppercase;
		color: white;
		border: none;
	    padding: 10px 15px;
	    border-radius: 3px;
cursor: pointer;
margin: 10px 0 20px;
	}
</style>
<div class="contact__main-title">
	<h4> По вопросам покупки автомобиля, а также по вопросам сервиса,<br>
	 обращайтесь по следующим контактам:</h4>
</div>
<div class="contact__wrapper">
	<div class="contact__item">
		<div class="contact__address">
			<h4 class="contact__address-title">Адрес:</h4>
			<div class="contact__address-text">
 <i class="fa fa-map-marker" aria-hidden="true"></i>141700, МО, г. Долгопрудный,<br>
				 Лихачевский проезд, дом 16
			</div>
		</div>
 <br>
		<div class="contact__worktime">
			<div class="contact__worktime-text">
				<p>
 <strong>Отдел продаж:</strong>
				</p>
				<p>
 <i class="fa fa-clock-o" aria-hidden="true"></i>ПН-ПТ с 08:00 до 20:00<br>
					 СБ-ВС с 09:00 до 18:00
				</p>
				<p>
 <strong>Сервис:</strong>
				</p>
				<p>
 <i class="fa fa-clock-o" aria-hidden="true"></i>Пн-Вс с 08:00 до 20:00
				</p>
			</div>
		</div>
	</div>
	<div class="contact__item">
		<div class="contact__address">
			<h4 class="contact__address-title">Адрес:</h4>
			<div class="contact__address-text">
 <i class="fa fa-map-marker" aria-hidden="true"></i>141007, МО, г. Мытищи,<br>
				 ул. Медицинская, дом 4А
			</div>
		</div>
 <br>
		<div class="contact__worktime">
			<div class="contact__worktime-text">
				<p>
 <strong>Отдел продаж:</strong>
				</p>
				<p>
 <i class="fa fa-clock-o" aria-hidden="true"></i>ПН-ПТ с 08:00 до 20:00<br>
					 СБ-ВС с 09:00 до 18:00
				</p>
				<p>
 <strong>Сервис:</strong>
				</p>
				<p>
 <i class="fa fa-clock-o" aria-hidden="true"></i>Пн-Вс с 08:00 до 20:00
				</p>
			</div>
		</div>
	</div>
	<div class="contact__item">
		<div class="contact">
			<h4 class="contact__title">Телефоны:</h4>
			<p>
 <strong>Коммерческий отдел:</strong>
			</p>
 <a href="tel:+74959679428" class="contact__link contact__phone"><i class="fa fa-phone"></i>+7 (495) 967-94-28</a> <br>
			<p>
 <strong>Техническое обслуживание:</strong>
			</p>
 <a href="tel:+74952874699" class="contact__link contact__phone"><i class="fa fa-phone"></i>+7 (495) 287-46-99</a> <br>
			<p>
 <strong>E-mail:</strong>
			</p>
 <a href="mailto: info@fuso-ak.ru" class="contact__link contact__email"><i class="fa fa-envelope"></i> info@fuso-ak.ru</a>
		</div>
	</div>
</div>
<button href="#testing" class = "myFeedBack callback">обратная связь</button><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>