<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Схема проезда");
$APPLICATION->SetPageProperty("title", "Схема проезда");
$APPLICATION->SetTitle("Схема проезда");
?>
<div class='back address-map'>
<? $APPLICATION->IncludeFile(
	SITE_TEMPLATE_PATH."/include_areas/addres_map.php",
	array(),
	array("MODE"=>"html")
); ?>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>