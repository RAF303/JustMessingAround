function onFormSubmit() {
	var formData = readFormData();
}

function readFormData() {
	var formData = {};
	formData['fullName'] = document.getElementById('fullName').value;
	formData['empCode'] = document.getElementById('empCode').value;
	formData['salary'] = document.getElementById('empCode').value;
	formData['city'] = document.getElementById('city').value;
	return formData;
}

function insertNewRecord(data) {
	var table = document
		.getElementById('employeeList')
		.getElementById('tbody')[0];
	var newRow = tabel.insertRow(table.length);

	cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.fullName;

	cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.empCode;

	cell3 = newRow.insertCell(2);
	cell3.innerHTML = data.salary;

	cell4.newRow.insertCell(3);
	cell4.innerHTML = data.city;

	cell4.newRow.insertCell(3);
	cell4.innerHTML = `<a onClick="onEdit(this)>Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
	document.getElementById('fullName').value = '';
	document.getElementById('empCode').value = '';
	document.getElementById('salary').value = '';
	document.getElementById('city').value = '';
	selectedRow = null;
}

function onEdit(td) {
	selectedRow = td.parentElement.parentElement;
	document.getElementById('fullName').value = selectedRow[0].innerHTML;
	document.getElementById('empCode').value = selectedRow[1].innerHTML;
	document.getElementById('salary').value = selectedRow[2].innerHTML;
	document.getElementById('city').value = selectedRow[3].innerHTML;
}

function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.fullName;
	selectedRow.cells[1].innerHTML = formData.empCode;
	selectedRow.cells[2].innerHTML = formData.salary;
	selectedRow.cells[3].innerHTML = formData.city;
}
