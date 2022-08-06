export const sessionizeUser = (user) => {
  return { userId: user.id, name: user.name, email: user.email }
}
