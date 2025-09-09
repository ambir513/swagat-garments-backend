import Otp from "../../models/Otp.js";
import User from "../../models/User.js";
import sendMail from "../../utils/sendMail.js";

export async function ForgotPassword(req, res) {
  try {
    const { emailId } = req.params;
    if (!emailId) {
      return res.status(404).json({ message: "email is required in params" });
    }
    const isUserExist = await User.findOne({ email: emailId });
    if (!isUserExist) {
      return res.status(404).json({ message: "User is not Exist" });
    }

    const code = Math.floor(Math.random() * 1000000);

    await sendMail(emailId, "OTP for forgot password", code);
    await Otp.create({
      email: emailId,
      code,
    });

    res.status(200).json({ message: "Otp send successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
