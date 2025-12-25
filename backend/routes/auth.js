const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
const router = express.Router()

router.post("/register", async (req, res) => {
  const { name, email, password, role, businessName, slug } = req.body
  const hashed = await bcrypt.hash(password, 10)

  let tenantId = null
  if (role === "ADMIN") {
    const tenant = await prisma.tenant.create({
      data: { name: businessName, slug }
    })
    tenantId = tenant.id
  }

  const user = await prisma.user.create({
    data: { name, email, password: hashed, role, tenantId }
  })

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  )

  res.json({ token })
})

module.exports = router




++++++++++++++Other routes like jobs, admin, technician, reviews follow the same simple Express + Prisma pattern+++++++++++++++++++++
