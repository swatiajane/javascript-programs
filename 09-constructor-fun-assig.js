function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

let yesBank = new Bank("Yes Bank", "Mumbai", "YESB123", "4567");
let sbiBank = new Bank("SBI Bank", "Delhi", "SBIN456", "7890");
let mahBank = new Bank("Mah Bank", "Pune", "MAHB789", "1234");
let axisBank = new Bank("Axis Bank", "Bangalore", "AXIS567", "8901");

console.log(
  `Bank Details are: BankName:${yesBank.bankName} || Location:${yesBank.location}|| IFSC Code:${yesBank.ifscCode}  || Branch Code:${yesBank.branchCode}`
);
console.log(
  `Bank Details are: BankName:${sbiBank.bankName}  || Location: ${sbiBank.location} || IFSCCode:${sbiBank.ifscCode} || Branch Code:${sbiBank.branchCode}`
);
console.log(
  `Bank Details are: BankName:${mahBank.bankName} ||  Location:${mahBank.location} || IFSCCode:${mahBank.ifscCode} || Branch Code:${mahBank.branchCode}`
);
console.log(
  `Bank Details are: BankName:${axisBank.bankName} || Location: ${axisBank.location} || IFSCCode:${axisBank.ifscCode} || Branch Code: ${axisBank.branchCode}`
);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Opening time of SBI Bank: ${sbiBank.openTime}`);
console.log(`Closing time of Axis Bank: ${axisBank.closeTime}`);
console.log(
  `Bank Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Opening Time: ${yesBank.openTime}`
);
