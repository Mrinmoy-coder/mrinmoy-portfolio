import { storage } from "hatchable";

export const access = "admin";
export const methods = ["POST"];

export default async function (req, res) {
  const data = req.body?.data;
  if (typeof data !== "string" || !data) return res.status(400).json({ error: "Missing data" });
  const bytes = Uint8Array.from(atob(data), c => c.charCodeAt(0));
  const url = await storage.put("resume-original.pdf", bytes, "application/pdf");
  res.json({ url });
}