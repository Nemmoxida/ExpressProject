import notes from "../../Logic/notes.js";

export default async function handlePost(userRepo, uuid, data, user) {
  const id = uuid;
  //   const userId = user;
  const { title, content } = data;
  const [getUserid] = await userRepo.getUser(user);

  const userId = getUserid.id;

  const note = new notes(id, title, content, userId);

  const post = await userRepo.post(note);

  return post;
}
