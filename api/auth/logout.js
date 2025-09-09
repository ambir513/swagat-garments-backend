export async function Logout(req, res) {
  const { id, role } = req.user;
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: false,
      sameSite: "none",
    });
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message });
  }
}
