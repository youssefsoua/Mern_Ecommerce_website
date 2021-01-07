import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'JohnDoe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'JaneDoe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
