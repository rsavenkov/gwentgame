import nodemailer from "nodemailer";

/**
 * Отправка письма
 *
 * @param req
 * @param res
 */
export default function (req, res) {

    const params = JSON.parse(req.body)

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.yandex.com",
        auth: {
            user: process.env.email,
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.email,
        to: process.env.email,
        subject: `Заявка на участие в турнире gwentgame от ${params.name}`,
        html: `<ul style="list-style: none">
<li>Имя:&nbsp;<strong>${params.name}</strong></li>
<li>Ник:&nbsp;<strong>${params.login}</strong></li>
<li>Телефон:&nbsp;<strong>${params.phone}</strong></li>
<li>Email:&nbsp;<strong>${params.email}</strong></li>
</ul>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            console.log(err)
            res.status(500).send()
        } else {
            console.log(info);
            res.status(200).send({status: 'ok'})
        }
    })
}