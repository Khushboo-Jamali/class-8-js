// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
let words = prompt("Enter anything");

switch (words) {
  case "deposit":
    let prompt1 = prompt("Enter your email");
    let prompt2 = prompt("Enter your password");
    if (prompt1 === "khushboo.com" && prompt2 === "1213") {
      let balins = 400;
      let prompt3 = prompt(
        "Your account balins " + balins + " deposit or withdraw"
      );

      if (prompt3 == "deposit") {
        let withd = parseInt(prompt("How much you want to deposit"));
        let reult = balins + withd;
        document.write(
          "Your old balins is ",
          balins,
          "<br> Your now balins is ",
          reult
        );
      }
    }
    break;
  case "withdraw":
    let email = prompt("Enter your email");
    let pass = prompt("Enter your password");
    if (email === "khushboo.com" && pass === "1213") {
      let balins = 400;
      let withd = parseInt(prompt("How much you want to withdraw"));
      if (withd <= balins) {
        let reult = balins - withd;
        document.write(
          "Your old balins is ",
          balins,
          "<br><br> Your now balins is ",
          reult
        );
      } else {
        document.write(" your  blnc is less thn ", withd);
      }
    }
    break;

  default:
    document.write("nvalid");
    break;
}
