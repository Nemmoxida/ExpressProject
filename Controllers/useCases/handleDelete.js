export default async function (userRepo, noteId) {
  return await userRepo.delete(noteId);
}
