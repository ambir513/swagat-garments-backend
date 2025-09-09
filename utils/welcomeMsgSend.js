import mailprovider from "mailprovider";

export default async function welcomeMsgSend(email) {
  await mailprovider({
    displayName: "Swagat Garments",
    email,
    subject: "Welcome ",
    htmlContent: "Welcome swagat garments",
  });
}
