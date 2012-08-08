# jQuery Plugin .placeholderFix()

## What does it do?

.placeholderFix() is a simple and useful plugin to show HTML5 placeholder in old browser or to manage it with a CSS class.

```
//Basic: add placeholder only to old browsers
	$('[placeholder]').placeholderFix();

//It works also in new browsers
	$('[placeholder]').placeholderFix({ 'allBrowser' : true });

//You can change placeholder CSS class name (default value is 'placeholderFix')
	$('[placeholder]').placeholderFix({ 'class' : 'className' });
```

As you can see from the examples above, by default the plugin will only be executet in those browsers that don't support the placeholder attribute of input and textarea elements.

But if you want, you can make it work in all browsers by setting the option 'allBrowser' value to true.
It's particulary useful if you need that your placeholder tags work in the same way in different browsers.

When placeholder text is shown in textarea or input, the element will be assigned a class. In this way you can manage placeholder text style.
By default, the class name is placeholderFix, but you can set another name with the property 'class'


## An example

This is an example of the usage of .placeholderFix() with placeholder style customization through CSS.

You can see the working example here : http://www.simonepomata.com/jquery/plugin/placeholderFix/

```
<!DOCTYPE html>
<html>
<head>
<style>
.placeholderFix{color:#944}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="jquery.placeholderFix.js"></script>
<script>
	$(function() {
		$('[placeholder]').placeholderFix({ 'allBrowser' : true });
	});
</script>
</head>
<body>
<form>
	<input type="text" id="user" name="user" placeholder="Your Username">
	<input type="password" id="password" name="password" placeholder="Your Password">
	<input type="submit" value="Submit"> <input type="reset" value="Reset">
</form>
</body>
</html>
```