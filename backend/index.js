require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
app.use("/uploads", express.static("uploads"))

app.get("/", (req, res) => {
  res.json({ status: "RepairHub API running" })
})

app.use("/auth", require("./routes/auth"))
app.use("/tenant", require("./routes/tenant"))
app.use("/technicians", require("./routes/technician"))
app.use("/jobs", require("./routes/jobs"))
app.use("/admin", require("./routes/admin"))
app.use("/reviews", require("./routes/reviews"))

app.listen(4000, () =>
  console.log("Backend running on http://localhost:4000")
)



