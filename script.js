window.onload = function () {
    let areaCommits = document.getElementById("commits");
    let buttonClick = document.getElementById("new_commit");
    addNewCommit = function () {
        let text_commit = document.getElementById("exampleTextarea").value;
        if (!text_commit || text_commit === "") {
            return
        }
        else {
            createNewCommit(text_commit);
            formCommit.reset();
        }
    }
    createNewDiv = function () {
        let dv = document.createElement('div');
        return dv;
    }
    createNewSpan = function () {
        let sp = document.createElement('span');
        return sp;
    }
    getUserName = function () {
        return "New User";
    }
    checkMonth = function (month) {
        switch (month) {
        case 1:
            month = "января"
            break;
        case 2:
            month = "февряля"
            break;
        case 3:
            month = "марта"
            break;
        case 4:
            month = "апреля"
            break;
        case 5:
            month = "мая"
            break;
        case 6:
            month = "июня"
            break;
        case 7:
            month = "июля"
            break;
        case 8:
            month = "августа"
            break;
        case 9:
            month = "сентября"
            break;
        case 10:
            month = "октября"
            break;
        case 11:
            month = "ноября"
            break;
        case 12:
            month = "декабря"
            break;
        }
        return month;
    }
    getDateOfCommit = function () {
        let date = new Date()
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        let mm = date.getMonth() + 1;
        mm = checkMonth(mm);
        if (mm < 10) mm = '0' + mm;
        let yy = date.getFullYear();
        if (yy < 10) yy = '0' + yy;
        return ' ' + dd + ' ' + mm + ' ' + yy;
    }
    createNewCommit = function (text) {
        let box = createNewDiv();
        let nameOfUser = createNewSpan();
        nameOfUser.innerHTML = getUserName();
        nameOfUser.className = "client-name";
        let dateCommit = createNewSpan();
        dateCommit.innerHTML = getDateOfCommit();
        dateCommit.className = "date-commit";
        let corner = createNewDiv();
        corner.className = "commit_user_triangle";
        let newCommit = createNewDiv();
        newCommit.className = "commit_user";
        newCommit.innerHTML = text;
        box.appendChild(nameOfUser);
        box.appendChild(dateCommit);
        box.appendChild(corner);
        box.appendChild(newCommit);
        areaCommits.appendChild(box);
    }
    checkEvents = function (event) {
        if (event.which == 13 && event.ctrlKey) {
            addNewCommit();
        };
    }
    buttonClick.addEventListener('click', addNewCommit, false);
    document.addEventListener('keydown', checkEvents, false);
    if (document.attachEvent) {
        button.attachEvent("onclick", addNewCommit);
        document.attachEvent("onkeydown", checkEvents);
    }
}