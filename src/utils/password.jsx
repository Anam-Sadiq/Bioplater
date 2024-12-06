import bcrypt from "bcryptjs";

// Function to hash a plain text password
export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
}

// Function to verify a plain text password against a hashed password
export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
