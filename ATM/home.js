var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     setText(this.responseText);
  }
};
xmlhttp.open("GET", "userInfo.php", true);
xmlhttp.send();

function setText(str) {
  var user = JSON.parse(str);
  var accountList = user.accountList;
  var htmls = "<tr> <th>Name</th>  <th>Account Number</th> <th>Type</th> <th>Balance</th> </tr>";
  for(let i = 0; i < accountList.length; i++) {
    let account = accountList[i];
    let accountName = account.accountName;
    let balance = account.balance;
    let type = account.type;
    let number = account.accountNumber;
    htmls += "<tr> <td>"+ accountName +"</td> <td>"+ number +"</td> <td>"+ type +"</td> <td> $"+ balance +"</td> </tr>";

  }

  document.getElementById("accounts").innerHTML = htmls;

}
