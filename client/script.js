const url = 'http://localhost:8000/employees';

function alert() {
    alert();
}

async function getAllEmployees() {
    const resp = await fetch(url);
    const employees = await resp.json();
    const tBody = document.getElementById('tBody');

    employees.forEach((employee) => {
        // table row
        const tr = document.createElement('tr');

        // 'firstName' column
        const tdFirstName = document.createElement('td');
        const nameLink = document.createElement('a');
        //
        /* Option 1 */
        nameLink.href = `EditEmployee.html?employeeId=${employee._id}`;
        // /* Option 2 */
        // nameLink.href = 'EditEmployee.html';
        // nameLink.onclick = () => sessionStorage.setItem('employeeId', employee._id);
        //
        nameLink.innerHTML = employee.firstName;
        tdFirstName.appendChild(nameLink);

        // 'lastName' column
        const tdLastName = document.createElement('td');
        tdLastName.innerHTML = employee.lastName;

        // 'startWorkYear' column
        const tdStartWorkYear = document.createElement('td');
        tdStartWorkYear.innerHTML = employee.startWorkYear;

        // 'departmentID' column
        const tdDepartmentID = document.createElement('td');
        tdDepartmentID.innerHTML = employee.departmentID;

        tr.appendChild(tdFirstName);
        tr.appendChild(tdLastName);
        tr.appendChild(tdStartWorkYear);
        tr.appendChild(tdDepartmentID);

        tBody.appendChild(tr);
    });
}

function createEmployee() {
    location.href = 'AddNew.html'; // sets the URL of the current page
}
