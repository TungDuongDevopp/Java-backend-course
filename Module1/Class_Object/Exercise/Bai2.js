class BankAccount{
    #owner;
    #balance;

    constructor(owner,balance) {
    this.#owner = owner;
    this.setBalance(balance);

    }
   getBalance(){
        return this.#balance;
   }
   setBalance(balance){
        if(balance<0) {
            this.#balance = 0;
        }
        else{
            this.#balance = balance;
        }
   }
   deposit(amount){
        if(amount <=0) return false;
        this.#balance += amount;
        return true;
   }
   withdraw(amount){
        if(amount<=0 || amount>this.#balance) return false;
        this.#balance -= amount;
        return true;
   }


}
    let bank1 =  new BankAccount("Dương",15000000);
    console.log(bank1);

    //Thực hiện nạp tiền
    let amount1 = -500000;
    let amount2 = 500000;
    if(bank1.deposit(amount1)){
        console.log(`Nạp thành công ${amount1} Số dư là ${bank1.getBalance()}`);
    }
    else{
        console.log("Nạp thất bại! Vui lòng kiểm tra lại số tiền ");
    }

  if(bank1.deposit(amount2)){
    console.log(`Nạp thành công ${amount2} Số dư là ${bank1.getBalance()}`);
    }
    else{
        console.log("Nạp thất bại! Vui lòng kiểm tra lại số tiền ");
    }

    // Thực hiện rút tiền
    if(bank1.withdraw(amount1)){
        console.log(`Rút thành công ${amount1} Số dư là ${bank1.getBalance()}`);
    }
    else{
        console.log("Rút thất bại! Vui lòng kiểm tra lại số tiền ");
    }

    if(bank1.withdraw(amount2)){
        console.log(`Rút thành công ${amount2} Số dư là ${bank1.getBalance()}`);
    }
    else{
        console.log("Rút thất bại! Vui lòng kiểm tra lại số tiền ");
    }

