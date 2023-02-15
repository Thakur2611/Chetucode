<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
	var hindi=parseInt(prompt("enter hindi marks"));
	var eng=parseInt(prompt("enter english marks"));
	var maths=parseInt(prompt("enter maths marks"));
	var sci=parseInt(prompt("enter science marks"));
	var com=parseInt(prompt("enter computer marks"));
	var total=hindi+eng+maths+sci+com;
	document.write("total",total, "<br>");
	var per=(total/5);
	
	
	document.write("persentage",per,("%"),"<br>");
	if
	(per>=80)
	{
	document.write("grade a","<br>");
	}
	else if(per>60)
	{
	document.write("grade b","<br>");
	}
	else if(per>45)
	{
	document.write("grade c","<br>");
	}
	else if(per>33){
	document.write("grade e","<br>");}
	
	else{document.write("grade f","<br>");}
	
	if(hindi<33)
	{document.write("fail in hindi","<br>");}
	if(eng<33)
	{document.write("fail in english","<br>");}
	if(maths<33)
	{document.write("fail in maths","<br>");}
	if(sci<33)
	{document.write("fail in science","<br>");}
	if(com<33)
	{document.write("fail in computer","<br>");}
	
	
        
    </script>
</body>
</html>