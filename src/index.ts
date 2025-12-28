import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1 as string);
  const num2 = parseFloat(req.query.num2 as string);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "num1 and num2 must be valid numbers" });
  }

  const result = num1 + num2;
  res.json({ result });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
