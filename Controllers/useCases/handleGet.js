export default async function handleGet(userRepo, keyword, user) {
  const [getUserId] = await userRepo.getUser(user);
  const userId = getUserId.id;
  if (!keyword) {
    const data = await userRepo.getAll(userId);
    return data;
  } else {
    const data = await userRepo.get(userId, keyword);
    return data;
  }
}
