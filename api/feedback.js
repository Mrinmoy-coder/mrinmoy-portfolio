import { email } from "hatchable";

export const access = "public";
export const methods = ["POST"];

export default async function (req, res) {
  const name = String(req.body?.Name || "").trim();
  const senderEmail = String(req.body?.Email || "").trim();
  const message = String(req.body?.Message || "").trim();

  if (!name || !senderEmail || !message) {
    return res.status(400).json({
      error: "Please fill all fields."
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(senderEmail)) {
    return res.status(400).json({
      error: "Please enter a valid email address."
    });
  }

  const safeName = name.replace(/[<>]/g, "");
  const safeEmail = senderEmail.replace(/[<>]/g, "");
  const safeMessage = message.replace(/[<>]/g, "");

  await email.send({
    to: "mrinmoym407@gmail.com",
    subject: `Portfolio Feedback from ${safeName}`,
    html: `
      <h2>New Portfolio Feedback</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage.replace(/\n/g, "<br>")}</p>
    `
  });

  res.json({
    success: true,
    message: "Feedback sent successfully."
  });
}
