function validateForm()
	{
		var x = document.forms["loginForm"]["name"].value;
		var y = document.forms["loginForm"]["password"].value;
		if(x=="")
		{
			alert("Please Enter name");
			document.getElementById("user-alert").style.visibility="visible";
			return false;
		}
		if(y=="")
		{
			alert("Please Enter  password");
			document.getElementById("pass-alert").style.visibility="visible";
			return false;
		}
	}