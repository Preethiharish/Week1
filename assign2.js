
 // var browserversion="chrome"
// let browserversion="chrome"
 const browserversion="chrome"
function getBrowserVersion()
{
    let browserversion="firefox"
    if (browserversion=="chrome")
    {
        console.log("global variable is printed inside the function - chrome browser " ) 
    }
     
    console.log("local variable is printed inside the function -", browserversion)
        
}
getBrowserVersion()