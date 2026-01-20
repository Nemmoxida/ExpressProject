import notes from "../../Logic/notes.js";

export default async function handlePost(userRepo, title, content, user) {
  // getting userId for assigning it to the notes
  const [getUserid] = await userRepo.getUser(user);
  const userId = getUserid.id;

  // make note object for making sure that every note is the same format
  const note = new notes(title, content, userId);

  const post = await userRepo.post(note);

  return post;
}
