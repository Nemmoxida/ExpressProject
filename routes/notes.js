import getNotes from "../Controllers/notes/getNotes.js";
import postNotes from "../Controllers/notes/postNotes.js";
import editNotes from "../Controllers/notes/putNotes.js";
import deleteNotes from "../Controllers/notes/deleteNotes.js";

export default function notes(express, userRepo, uuid) {
  const router = express.Router();
  const getNotesHandler = getNotes(userRepo);
  const postNotesHandler = postNotes(userRepo);
  const editNotesHandler = editNotes(userRepo);
  const deleteNotesHandler = deleteNotes(userRepo);

  router.get("/", getNotesHandler);
  router.post("/", postNotesHandler);
  router.put("/", editNotesHandler);
  router.delete("/", deleteNotesHandler);

  return router;
}
