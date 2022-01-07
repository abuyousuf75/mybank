const logInBtn = document.getElementById("btn");
//Login Button Event Handaler
logInBtn.addEventListener('click',function(){
    const loginArea =document.getElementById('login-area');
    loginArea.style.display="none";
    const trangaction = document.getElementById('trangaction');
    trangaction.style.display="block";
});

//Deposite button handaler

const diposteButton = document.getElementById("d-btn");
diposteButton.addEventListener('click',function(){
const dipositeAmound = document.getElementById('diposteAmound').value;
const dipositeNumber =parseFloat(dipositeAmound);

update("currentDiposte",dipositeNumber);

update("currentBlance",dipositeNumber);

document.getElementById('diposteAmound').value="";

})

// Withdraw Button Handalar

const withdrawButton = document.getElementById("addWihdraw");
withdrawButton.addEventListener("click",function(){
    const withdrawNumber = getInput("withdrawAmound")
    
   update("currentWithdraw",withdrawNumber);
   update("currentBlance",-1 * withdrawNumber)
   document.getElementById("withdrawAmound").value = "";
})

function getInput(id){
    const withdrawAmound =document.getElementById(id).value;
    const withdrawNumber=parseFloat(withdrawAmound);
    return withdrawNumber
}
function update(id,dipositeNumber){
    const currentBlance = document.getElementById(id).innerText;
    const currentBlanceNumber = parseFloat(currentBlance);
    const tottalNewBlance =dipositeNumber+currentBlanceNumber;
    document.getElementById(id).innerText=tottalNewBlance;
}