export default async function handlePut(userRepo, noteId, title, content) {
  return await userRepo.put(noteId, title, content);
}
