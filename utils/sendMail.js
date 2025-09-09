import mailprovider from "mailprovider";

export default async function sendMail(email, subject, code) {
  await mailprovider({
    displayName: "Swagat Garments",
    email: email,
    subject,
    htmlContent: `Your OTP is ${code}`,
  });
}
