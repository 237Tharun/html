<!doctype html>
<html>
<head>
<title>document</title>
</head>
<body>
<p>hii tharun</p>
</body>
<script>
let a="tharun"//global scope
function myfun(){
let b="good morning"//local scope
document.write("inside the function"+a+"<br>")
}
myfun()
document.write("outside the function"+a+"<br>)
</script>
</html>
