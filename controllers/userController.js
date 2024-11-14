const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (req, res) => {
  try {
    const { nama, bio } = req.body;
    const user = await prisma.user.create({
      data: { nama, bio },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };