"use strict";
var apiUrl = 'http://dummy.restapiexample.com/api/v1/';
var log = function (data) {
    var logDiv = document.querySelector('.log');
    logDiv.textContent = data;
};
var allEmployeesBtnCLick = function (e) {
    var url = apiUrl + "employees";
    fetch(url)
        .then(function (resp) { return resp.json(); })
        .then(function (result) { return result.data; })
        .then(function (employees) { return log(employees); })
        .catch(function (err) { return log(err); });
};
var createBtnClick = function (e) {
    var btn = e.currentTarget;
    var wrapper = btn.parentElement;
    var name = wrapper.querySelector('[name="name"]').value;
    var salary = wrapper.querySelector('[name="salary"]').value;
    var age = wrapper.querySelector('[name="age"]').value;
    var jsondata = JSON.stringify({ name: name, salary: salary, age: age });
    var xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl + "create");
    xhr.setRequestHeader('Content-type', 'application/json, charset=utf-8');
    xhr.onload = function () {
        log(xhr.response);
    };
    xhr.onerror = function () {
        log(xhr.statusText);
    };
    xhr.send(jsondata);
};
var deleteBtnClick = function (e) {
    var btn = e.currentTarget;
    var wrapper = btn.parentElement;
    var id = wrapper.querySelector('[name="id"]').value;
    fetch(apiUrl + "delete/" + id, {
        method: 'DELETE',
    }).then(function (resp) { return resp.json(); })
        .then(function (data) { return log(JSON.stringify(data)); })
        .catch(function (err) { return log(JSON.stringify(err)); });
};
var bindEventListeners = function () {
    var allEmployeesBtn = document.querySelector('#allEmployeesBtn');
    var createBtn = document.querySelector('#createEmployeeBtn');
    var deleteBtn = document.querySelector('#deleteEmployeeBtn');
    allEmployeesBtn === null || allEmployeesBtn === void 0 ? void 0 : allEmployeesBtn.addEventListener('click', allEmployeesBtnCLick);
    createBtn === null || createBtn === void 0 ? void 0 : createBtn.addEventListener('click', createBtnClick);
    deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click', deleteBtnClick);
};
bindEventListeners();
