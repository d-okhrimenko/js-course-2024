let setSidebarControl = (qSelector, sClass) => {
    let element = document.querySelector(`#${qSelector}`);
    element.onclick = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = sClass;
    }
}

setSidebarControl("showSidebar", 'flex');
setSidebarControl("showOnMobile", 'none');

let setSidebarItemAction = (dlgID, elementID, show = true) => {
    let dialog = document.getElementById(dlgID);
    let item = document.getElementById(elementID);
    let dialogAction = (dlgAction) => dlgAction();
    
    item.onclick = () => dialogAction((show) ? dialog.showModal() : dialog.close());
}

let userItemsList = [];

// setSidebarItemAction("login", "log-in");
// setSidebarItemAction("login", "login-cancel", false); 

let addDlg = new ActionDialog("addiction", "add");
let delDlg = new ActionDialog("removal", "rem");
let loginDlg = new ActionDialog("login", "log-in");
let viewDlg = new ActionDialog("popup-view", "view");
