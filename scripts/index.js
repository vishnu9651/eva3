// Store the wallet amount to your local storage with key "amount"
function addToWallet(){
    event.preventDefault();
    if(localStorage.getItem("amount")=== null){
      wallet.innerHTML=0;
      localStorage.setItem("amount","0")
      document.querySelector("#wallet").innerText="0"
    }
    var add=document.querySelector("#amount").value
    var money=0;
    money=localStorage.getItem("amount");
    
    money=Number(money)+Number(add);
    

console.log(money)
localStorage.setItem("amount",money)
document.querySelector("#wallet").innerText=money
  }