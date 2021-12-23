const os = require('os');
  
// Printing os.cpus()
var cpu_s=os.cpus();
var no_of_logical_core=0;
cpu_s.forEach(element => { 
    no_of_logical_core++;
    console.log("Logical core "
            + no_of_logical_core + " :");
    console.log(element); 
}); 
  
console.log("total number of logical core is "
        + no_of_logical_core);