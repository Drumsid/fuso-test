<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("ТСО Калькулятор");
$APPLICATION->AddHeadScript($APPLICATION->GetCurPage() . 'res/Chart.bundle.min.js');
$APPLICATION->AddHeadScript($APPLICATION->GetCurPage() . 'calc.js');
$APPLICATION->SetAdditionalCSS($APPLICATION->GetCurPage() . 'calc.css');
?><p>&nbsp;</p>
<div class='row mb-3'>
	<div class='col-6 text-center'><img src='150.jpg' alt=''><br><br>CANTER TF 7.5т<br><br></div>
	<div class='col-6 text-center'><img src='175.jpg' alt=''><br><br>CANTER TF 8.55т<br><br></div>
</div>
<div id='tso'>

</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>