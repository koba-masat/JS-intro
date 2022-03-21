var address = "116-0014東京都荒川区東日暮里6-17-7メゾン・ド・ティアラ502号室";
var contact = "masa.tennis-1014_0409@ne.co.jp/080-2192-9922";

var post = /\d{3}-\d{4}/;
var mail = /[\w-\.]+[^\.]@[\w-]+.[\w-\.]+/;
var tel = /((\d{3})-(\d{4})-(\d{4}))/;
var fullname = /^[a-zA-Z]*$/;

console.log(address.match(post));
console.log(contact.match(mail));
console.log(contact.match(tel));

console.log(tel.test(contact));
console.log(fullname.test(contact));

console.log(contact.replace(tel, "電話番号は、$1です"));
console.log(contact.replace(tel, "電話番号は、$2$3$4です"));
