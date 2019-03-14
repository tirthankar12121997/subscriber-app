back = document.getElementById("back"); //back button
add1 = document.getElementById("add1"); //add button 1
add2 = document.getElementById("add2"); //add button final

nametxt = document.getElementById("nametxt"); //name textfield
phonetxt = document.getElementById("phonetxt"); //phone textfield

add = document.getElementById("add"); //add button division
details = document.getElementById("details"); //details division
display = document.getElementById("display"); //display table divison
displaytable = document.getElementById("displaytable"); //table for displaying content
showname = document.getElementById("showname"); //display name synchronously
showphone = document.getElementById("showphone"); //display phone no synchronously
header = document.getElementById("header"); //heading of app

//initialisation
namelist = [];
phonelist = [];
renderList();

//input functions
add1.onclick = function () {
	back.style.display = "inline-block";
	details.style.display = "block";
	display.style.display = "none";
	nametxt.value = "";
	phonetxt.value = "";
	header.innerHTML = "ADD SUBSCRIBER";
	showname.innerHTML =  "";
	showphone.innerHTML = "";
	this.style.display = "none";
}

back.onclick = function () {
	details.style.display = "none";
	display.style.display = "block";
	add1.style.display = "inline-block";
	header.innerHTML = "PHONE DIRECTORY";
	this.style.display = "none";
}

nametxt.onkeyup = function () {
	showname.innerHTML = this.value;
}

phonetxt.onkeyup = function () {
	showphone.innerHTML = this.value;
}

add2.onclick = function () {
	namevar = nametxt.value;
	phonevar = phonetxt.value;
	if (phonevar.length == 10 && !isNaN(phonevar))
	{
		namelist.push(namevar);
		phonelist.push(phonevar);
		renderList();
		header.innerHTML = "PHONE DIRECTORY";
		details.style.display = "none";
		display.style.display = "block";
		add1.style.display = "inline-block";
		back.style.display = "none";
	}
	else
	{
		alert("Enter a correct phone no.(length should be 10)");
	}
}

//rendering functions
function renderList () {
	var content = `
		<tr>
			<th style="width: 38%;">NAME</th>
			<th style="width: 38%;">PHONE</th>
			<th style="width: 24%;"></th>
		</tr>
	`;
	for (i = 0; i < namelist.length; i++) {
		content += `
			<tr>
				<td style="width: 38%;">${namelist[i]}</td>
				<td style="width: 38%;">${phonelist[i]}</td>
				<td style="width: 24%;"><button class="deleteb" onclick="deleteSub(${i})">Delete</button></td>
			</tr>
		`
	}
	displaytable.innerHTML = content;
}
//delete subscriber function
function deleteSub(index) {
	namelist.splice(index, 1);
	phonelist.splice(index, 1);
	renderList();
}