<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("ТСО Калькулятор");
$APPLICATION->AddHeadScript($APPLICATION->GetCurPage() . 'Chart.bundle.min.js');
$APPLICATION->AddHeadScript($APPLICATION->GetCurPage() . 'calc.js');
$APPLICATION->AddHeadScript('https://yastatic.net/share2/share.js');
$APPLICATION->SetAdditionalCSS($APPLICATION->GetCurPage() . 'calc.css');


$res = json_decode(stripslashes($_GET['res']), true);
$chart = json_decode(stripslashes($_GET['chart']), true);

?>
<div id='tsores'>
<?
foreach($_GET as $name => $value) {
?>
	<input type='hidden' name='<?= $name; ?>' value='<?= $value; ?>'>
<?
}
?>
</div>
<div class='tso-res'>
	<div class='d-flex justify-content-end'>
		<!--div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir"></div-->
		<i class="fa fa-print fa-lg print" aria-hidden="true" style="padding-top: 5px; margin-left: 5px; cursor: pointer;"></i>
	</div>
	<div class="summary mb-3">
	</div>
	<div class="row">
		<div class='col-8'>
			<h3>Структура затрат</h3>
			<canvas id='myChart'></canvas>
		</div>
		<div class='col-4'>
			<h3>Как сэкономить?</h3>
			<label><input type='checkbox' id='sc' name='sc'> Сервисные контракты</label>
			<p class='mb-4'><a href='/service/contracts/' target='_blank'>подробнее</a></p>
			<p class='text-left'><strong>Точка окупаемости с грузоперевозок <span class='res_tb_g'></span> г.</strong></p>
			<p class='text-left'><strong>Точка окупаемости с аренды <span class='res_tb_r'></span> час.</strong></p>
		</div>
	</div>
</div>
<script>
$(document).ready(function(){
	$('#tsores').MyCalc();
});
</script>
<script>
    $('.print').on('click', function() {
		window.print();
    });
	consult = $('.consultation');
	consult.addClass('ajax-form');
</script>
<style media='print'>
tr:nth-child(even) td{
	background: #f0f0f0;
}
.logo.mobile,
.left-bar,
.footer-nav,
.footer,
.consultation,
.head-title{
	display: none !important;
}
</style>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>