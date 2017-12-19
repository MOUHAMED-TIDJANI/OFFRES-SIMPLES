<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>OFFRES SIMPLES</title>
<link rel="stylesheet" type="text/css" href="style.css">
<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
	<script type="text/javascript">
		$(function() {
			$("#datepicker").datepicker({ dateFormat: "mm-dd" }).val()
		});
	</script>
	<script>
		<?php
		session_start();
		?>
	</script>


</head>
<body>

<div class="container">
	
	<div id="header">
		<div class="intro_text">
			<h1> OFFRES SIMPLES </h1>
			<p> <?php echo date("d - m - Y");?></p>
			<h2><?php
$x=$_POST['nombreP'];
$y=$_POST['nombreO'];

$sommePome=$x*0.60;	
$a=$x+$x;
			if ($y%2 == 0)
			{			
$sommeOrange=$y*1.25;
$b=$y/2; }
echo "le nombre de Pome Acheter est  de " .$x; ?> <hr> <?php
echo "le nombre de Pome Offertes est  de " .$x; ?><hr> <?php
echo "le nombre d'Orange Acheter est de " .$y; ?> <hr> <?php
echo "le nombre d'Orange Offertes est de " .$b; ?> <hr> <?php
			
$OP=$sommePome+$sommeOrange;?><hr><?php
echo "LA SOMME TOTAL EST DE  " .($OP). " $ ";
?></h2>
<hr>
<a href="index.php"> RETOUR </a>
		</div>
	</div>
	<!-- Ceci est un commentaire, il ne 
sera pas affiché dans le navigateur HTML -->

</body>
</html>