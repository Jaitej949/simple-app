const express = require("express");
 
const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "API is running",
    timestamp: new Date()
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
}); 
