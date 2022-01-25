console.log("added");
function submitData(){
    alert("Thanks for Contacting..!")
}
//when we refresh page there is no sidebar initially
document.querySelector('.cancel').style.display='none'  

document.querySelector('.hamburger').addEventListener("click", () =>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');

    // when sidebar is absent -->
    if( document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'   //display ham
        document.querySelector('.cancel').style.display='none'   //hide cancel

    }
    // when sidebar is present -->
    else{
        document.querySelector('.ham').style.display='none'   //hide ham
        setTimeout(() => {
            document.querySelector('.cancel').style.display='inline'   //display cancel
        }, 350);
       

        
    }
})

