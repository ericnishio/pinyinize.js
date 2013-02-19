<!DOCTYPE html>
<html>
<head>
	<title>PinyinConverter</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta name="description" content="PinyinConverter is a jQuery script that allows you to easily convert Hanyu Pinyin tone numbers to tone marks on your website."/>
	<meta name="keywords" content="hanyu pinyin, convert, converter, tone marks, tone numbers, tones, mandarin, chinese, jquery, javascript, html, website, web development"/>
	<link type="text/css" rel="stylesheet" href="bootstrap/css/bootstrap.min.css"/>
	<link type="text/css" rel="stylesheet" href="bootstrap/prettify/prettify.css"/>
	<link type="text/css" rel="stylesheet" href="css/styles.css"/>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="bootstrap/prettify/prettify.js"></script>
	<script type="text/javascript">
		// Google Analytics
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-2347685-6']);
		_gaq.push(['_trackPageview']);

		(function () {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();
	</script>
</head>

<body onload="prettyPrint()">

<div class="container">

	<div class="clearfix">
		<div class="span6 no-left-margin">
			<header class="jumbotron subhead">
				<h1>PinyinConverter</h1>

				<p class="lead"><em>PinyinConverter</em> is a jQuery plugin that lets you
					easily convert Hanyu Pinyin tone numbers to tone marks.</p>
				<a href="pinyinconverter.jquery.js">
					<button class="btn btn-large btn-primary"><i class="icon-download-alt icon-white"></i> Download</button>
				</a>
				<a href="pinyinconverter.jquery.min.js">
					<button class="btn btn-large"><i class="icon-download-alt"></i> Minified</button>
				</a>

				<br/><br/>

				<!-- AddThis Button BEGIN -->
				<div class="addthis_toolbox addthis_default_style">
					<a class="addthis_button_preferred_1"></a>
					<a class="addthis_button_preferred_2"></a>
					<a class="addthis_button_preferred_3"></a>
					<a class="addthis_button_preferred_4"></a>
					<a class="addthis_button_compact"></a>
					<a class="addthis_counter addthis_bubble_style"></a>
				</div>
				<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4f9446136c1a381c"></script>
				<!-- AddThis Button END -->

			</header>
		</div>

		<div class="span5 pull-right">
			<div class="well form-search span4 wrapper">
				<h1>Demo</h1>
				<br/>

				<div class="input-append">
					<input type="text" id="chinese" class="input-medium" placeholder="Example: nv3 sheng1"/>
					<button id="convert" class="btn"><i class="icon-font"></i> Convert</button>
				</div>
			</div>
		</div>
	</div>
	<!-- .clearfix -->

	<br/>

	<div class="page-header">
		<h1>Setup</h1>
	</div>

	<h2>1. Download PinyinConverter</h2>

	<p>Then place it in your web page directory.</p>

	<h2>2. Load jQuery and PinyinConverter</h2>

	<p>Insert the following lines into the header of the page where you want to use PinyinConverter.</p>

	<div class="clearfix">
            <pre class="span12 prettyprint">&lt;script type=&quot;text/javascript&quot; src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js&quot;>&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src="<strong>pinyinconverter.jquery.js</strong>&quot;&gt;&lt;/script&gt;</pre>
	</div>

	<h2>3. Add the HTML elements to your web page</h2>

	<p>Add the following piece of code to where you want to show the conversion tool.</p>

	<div class="clearfix">
        <pre class="span6 prettyprint">&lt;input type=&quot;text&quot; id=&quot;chinese&quot; /&gt;
&lt;button id=&quot;convert&quot;&gt;Convert&lt;/button&gt;</pre>
	</div>

	<h2>4. Configure PinyinConverter</h2>

	<p>Insert the following code at the end of the HTML file.</p>

	<div class="clearfix">
        <pre class="span6 prettyprint">&lt;script type=&quot;text/javascript&quot;&gt;
    $('input#chinese').PinyinConverter($('button#convert'));
&lt;/script&gt;</pre>
	</div>

	<h2>That's it!</h2>

	<div class="page-header">
		<h1>How to Use</h1>
	</div>

	<p>Simply type your words with Hanyu Pinyin tone numbers, <strong>always separating each term with a space</strong>, and press the convert button.</p>

	<div class="page-header">
		<h1>Options</h1>
	</div>

	<p>You may also choose to supply additional options as parameters, like so:</p>

	<div class="clearfix">
		<pre class="span12 prettyprint">&lt;script type=&quot;text/javascript&quot;&gt;
    $('input#chinese').PinyinConverter($('button#convert'), {
        focusAfterConvert: true, // refocuses on the input field after conversion
        consoleMessages: true // prints out console messages (for development)
    });
&lt;/script&gt;</pre>
	</div>

	<footer class="footer">
		<p>Copyright &copy; 2012&ndash;<?php echo date('Y'); ?> Eric Nishio</p>
		<p><em>PinyinConverter</em> is an open source project and is licensed with the <a href="http://www.opensource.org/licenses/bsd-license.php">New BSD License</a>.</p>
	</footer>

</div>

<script type="text/javascript" src="pinyinconverter.jquery.js"></script>

<script type="text/javascript">
	// PinyinConverter configuration
	var field = $('input#chinese'),
		button = $('button#convert');

	field.PinyinConverter(button, {
		focusAfterConvert:true,
		consoleMessages:true
	});
</script>

</body>
</html>
