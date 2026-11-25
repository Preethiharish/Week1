function launchBrowser(browsername)

{
    if (browsername==="chrome") {
    console.log("chrome browser launched") }
    else 
    {
        console.log("error")
    }
}
function runTest(testType)
{
    switch(testType)
    {
             case "sanity":
            console.log("test type is sanity")
            //break
            case "regression":
            console.log("test type is regression")
            //break
            default :
            console.log("test type is smoke")
    }
}
launchBrowser("chrome")
runTest("regression")