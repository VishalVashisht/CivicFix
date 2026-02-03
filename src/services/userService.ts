const prisma = require('../lib/prisma');

// 1. Function to insert a new user
export const createUser = async () => {
  return await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
      password_hash: "hashed_string_here",
      salt: "random_salt",
      role: "CITIZEN",
      reputation: 10
    }
  });
};

// 2. Function to fetch a user by email
export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  // Note: BigInt needs to be converted to string or number 
  // before sending to JSON, or Express will error out.
  return user;
};