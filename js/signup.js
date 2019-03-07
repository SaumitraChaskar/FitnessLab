function validateForm()
	{
		var uname = document.forms["signup"]["uname"];
		var password = document.forms["signup"]["password"];
		var email = document.forms["signup"]["email"];
		if(uname.value=="")
		{
			alert("Please Enter user name");
			document.getElementById("user-alert").style.visibility="visible";
			return false;
		}
		else if(password.value=="")
		{
			alert("Please Enter password");
			document.getElementById("pass-alert").style.visibility="visible";
			return false;
		}
		if(email.value=="")
		{
			alert("Please Enter email");
			document.getElementById("email-alert").style.visibility="visible";
		}
		else if(!email.value.includes("."))
		{
			document.getElementById("email-alert").innerText="not valid";
			document.getElementById("email-alert").style.visibility="visible";
		}
		else if(!email.value.includes("@"))
		{
			document.getElementById("email-alert").innerText="not valid";
			document.getElementById("email-alert").style.visibility="visible";
		}
	}