import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

const resend = new Resend(process.env.RESEND_API_KEY);

export const resendEmail = async({sendTo, emailSubject, htmlContent}) => {
  const { data, error } = await resend.emails.send({
    from: 'remsVento <onboarding@resend.dev>',
    to: sendTo,
    subject: emailSubject,
    html: htmlContent,
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
};
