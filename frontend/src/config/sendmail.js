import { SMTPClient } from "smtp-client";

const SendMail = () => {
    let s = new SMTPClient({
        host: 'smtp.gmail.com',
        port: 587
    });
    (async function () {
        await s.connect();
        await s.greet({ hostname: 'smtp.gmail.com' });
        await s.authPlain({ username: 'presstencao@gmail.com', password: 'K2108f84||' });
        await s.mail({ from: 'presstencao@gmail.com' });
        await s.rcpt({ to: 'fabio.presstencao@gmail.com' });
        await s.data(' mail source');
        await s.quit();
    })().catch(console.error);

}
export default SendMail;