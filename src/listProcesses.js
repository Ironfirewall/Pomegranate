const Shell = require('node-powershell');

const ps = new Shell({
    executionPolicy: 'Bypass',
    noProfile: true
});

const processName = "blender";
const processes = document.getElementById("processes");

// ps.addCommand(`Get-Process ${processName} | select starttime`);
ps.addCommand(`Get-Process ${processName} | Format-List ProcessName, StartTime, CPU`);
ps.invoke().then(output => {
    console.log(output)
    processes.innerHTML=output;
}).catch(err => {
    // console.log(err);
    console.log(processName + " is not running");
    processes.innerHTML="That process is not running";
});