var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var email = '';
var pass = '';
var textemail = 'Email : ';
var textpass = 'Password : ';
for(var ii=0; ii<15; ii++){
    email += chars[Math.floor(Math.random() * chars.length)];
}

for(var ii=0; ii<15; ii++){
    pass += chars[Math.floor(Math.random() * chars.length)];
}
document.write(textemail + email + '@gmail.com<br>');
document.write(textpass + pass);
