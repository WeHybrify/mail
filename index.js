const nodemailer = require("nodemailer");
const express = require('express');
const app = express();
const PORT = 3000;
  
app.post('/', async (req, res)=>{

    try {
        // const account = await nodemailer.createTestAccount();
    
        const transporter = nodemailer.createTransport({
            host: 'c2381096.ferozo.com',
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: "hello@wehybrify.com", // generated ethereal user
                pass: "Alelusanti142@" // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        const mailOptions = {
            from: '"We Hybrify" <hello@wehybrify.com>', // sender address
            to: "chicalaale6@gmail.com", // list of receivers
            subject: "Hi There!", // Subject line
            html: `
                  <div
                    class="container"
                    style="max-width: 90%; margin: auto; padding-top: 20px; text-align: center;"
                  >
                    <h2>Hello, there!</h2>
                    <h4>Nice to meet you.</h4>
               </div>`
        }
    
        const mail = await transporter.sendMail(mailOptions);
        // console.log(mail);

        return res.send({
            preview: nodemailer.getTestMessageUrl(mail),
            mail,
            sent: true
        });
    
    } catch (e) {
        res.status(500).send(e)
    }

});
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running")
    }
);
