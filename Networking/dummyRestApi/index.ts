const apiUrl = 'http://dummy.restapiexample.com/api/v1/';

const log = (data: string) => {
  const logDiv = document.querySelector('.log');
  logDiv.textContent = data;
};

const allEmployeesBtnCLick = (e: object) => {
  const url = `${apiUrl}employees`;

  fetch(url)
    .then((resp) => resp.json())
    .then((result) => result.data)
    .then((employees) => log(employees))
    .catch((err) => log(err));
};

const createBtnClick = (e: object) => {
  const btn = e.currentTarget;
  const wrapper = btn.parentElement;
  const name = wrapper.querySelector('[name="name"]').value;
  const salary = wrapper.querySelector('[name="salary"]').value;
  const age = wrapper.querySelector('[name="age"]').value;
  const jsondata = JSON.stringify({ name, salary, age });

  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${apiUrl}create`);

  xhr.setRequestHeader('Content-type', 'application/json, charset=utf-8');

  xhr.onload = () => {
    log(xhr.response);
  };
  xhr.onerror = () => {
    log(xhr.statusText);
  };

  xhr.send(jsondata);
};

const deleteBtnClick = (e: object) => {
  const btn = e.currentTarget;
  const wrapper = btn.parentElement;
  const id = wrapper.querySelector('[name="id"]').value;

  fetch(`${apiUrl}delete/${id}`, {
    method: 'DELETE',
  }).then((resp) => resp.json())
    .then((data) => log(JSON.stringify(data)))
    .catch((err) => log(JSON.stringify(err)));
};

const bindEventListeners = () => {
  const allEmployeesBtn = document.querySelector('#allEmployeesBtn');
  const createBtn = document.querySelector('#createEmployeeBtn');
  const deleteBtn = document.querySelector('#deleteEmployeeBtn');

  allEmployeesBtn?.addEventListener('click', allEmployeesBtnCLick);
  createBtn?.addEventListener('click', createBtnClick);
  deleteBtn?.addEventListener('click', deleteBtnClick);
};

bindEventListeners();
