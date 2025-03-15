export default async function handlePut(userRepo, noteId, changes) {
  return await userRepo.put(noteId, changes);
}
