import nodemailer from "nodemailer";

export default function (req, res) {

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: '',
            pass: '',
        },
        secure: true,
    });

    const mailData = {
        from: process.env.email,
        to: process.env.email,
        subject: `Message From 123`,
        // subject: `Message From ${req.body.name}`,
        // text: req.body.message + " | Sent from: " + req.body.email,
        // html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    res.send('success')
    // res.status(200).json({ name: 'John Doe' })


    // let nodemailer = require('nodemailer')


    /*const mailData = {
        from: 'demo email',
        to: 'your email',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    })

    console.log(req.body)
    res.send('success')*/
}