<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Все наши  преимущества на рынке продажи и обслуживания грузовой техники.");
$APPLICATION->SetPageProperty("title", "Наши преимущества");
$APPLICATION->SetTitle("Наши преимущества");
?>

<h3 class='mb-4'>Наши преимущества:</h3>
<ul>
<li>Официальный дилер с 2010 года</li>
<li>Технические центры в г. Долгопрудный и г. Мытищи</li>
<li>Сотрудничаем с крупными лизинговыми компаниями и банками России</li>
<li>Сертифицированные мастера</li>
<li>Система скидок для корпоративных клиентов</li>
</ul>
<hr>
<div class="row align-items-center">
	<div class="col-12 col-md">
		Заполните форму и менеджер свяжется с вами в ближайшее время
	</div>
<div class="col-12 col-md-auto">
		<p><a href="#callback" class="callback btn btn-lg btn-red">Заказать звонок</a></p>
	</div>
</div>
<hr>
<h3 class='mb-4'>Нас выбирают, за:</h3>
<div class="row mb-4">
	<div class="col-12 col-md-6 col-lg-3">
<div class="advantages-item__wrapper">
		<img src="/company/about/redring_1.jpg" alt="" class='mb-4'>
		<h4>Минимальный авансовый платеж</h4>
		<!--p><small>Описание</small></p-->
</div>
	</div>
	<div class="col-12 col-md-6 col-lg-3">
<div class="advantages-item__wrapper">
		<img src="/company/about/redring_2.jpg" alt="" class='mb-4'>
		<h4>Особые условия от финансовых партнеров</h4>
		<!--p><small>Описание</small></p-->
	</div>
</div>
	<div class="col-12 col-md-6 col-lg-3">
<div class="advantages-item__wrapper">
		<img src="/company/about/redring_3.jpg" alt="" class='mb-4'>
		<h4>Доставка автомобилей в любой регион России</h4>
		<!--p><small>Описание</small></p-->
	</div>
</div>
	<div class="col-12 col-md-6 col-lg-3">
<div class="advantages-item__wrapper">
		<img src="/company/about/redring_4.jpg" alt="" class='mb-4'>
		<h4>Максимально удобный сервис</h4>
		<!--p><small>Описание</small></p-->
	</div>
</div>
</div>
<style>
.advantages-item__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
flex-wrap:wrap;
}
.advantages-item__wrapper h4{
text-align:center;
}
</style><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>