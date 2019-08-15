<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Информацию о компании DM FUSO");
$APPLICATION->SetPageProperty("title", "О нас");
$APPLICATION->SetTitle("О нас");
//LocalRedirect("/company/about/advantages/");
?><!--p>
	 Контент заполняется дилерски центром FUSO
</p-->
<p style="text-align: center;">
	<img src="/company/about/banner_1.jpg" class="mb-4">
</p>
<h3 class="mb-4">Преимущества</h3>
<div class="row mb-4">
	<div class="col-12 col-md-6 col-lg-3">
		<div class="advantages-item__wrapper">
 <img src="/company/about/redring_1.jpg" alt="" class="mb-4">
			<h4>Минимальный авансовый платеж</h4>
			 <!--p><small>Описание</small></p-->
		</div>
	</div>
	<div class="col-12 col-md-6 col-lg-3">
		<div class="advantages-item__wrapper">
 <img src="/company/about/redring_2.jpg" alt="" class="mb-4">
			<h4>Особые условия от финансовых партнеров</h4>
			 <!--p><small>Описание</small></p-->
		</div>
	</div>
	<div class="col-12 col-md-6 col-lg-3">
		<div class="advantages-item__wrapper">
 <img src="/company/about/redring_3.jpg" alt="" class="mb-4">
			<h4>Доставка автомобилей в любой регион России</h4>
			 <!--p><small>Описание</small></p-->
		</div>
	</div>
	<div class="col-12 col-md-6 col-lg-3">
		<div class="advantages-item__wrapper">
 <img src="/company/about/redring_4.jpg" alt="" class="mb-4">
			<h4>Максимально удобный сервис</h4>
			 <!--p><small>Описание</small></p-->
		</div>
	</div>
</div>
<h3 class="mb-4">Партнёры</h3>
 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"partner",
	Array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(0=>"",1=>"",),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "5",
		"IBLOCK_TYPE" => "-",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "20",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(0=>"",1=>"",),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N"
	)
);?><br>
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