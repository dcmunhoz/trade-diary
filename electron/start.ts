const { app, BrowserWindow } = require('electron');

let win; 

function createWindow(){

    win = new BrowserWindow({
        width: 1366,
        height: 768,
        minWidth:800,
        minHeight:600,
        webPreferences: {
            nodeIntegration:true
        }
    });

    if (process.env.NODE_ENV === 'development') {
        win.loadURL('http://localhost:3000');
    }

    console.log("Electron started");
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () =>{
    app.quit();
});