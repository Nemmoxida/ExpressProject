import getNotes from "../Controllers/getNotes.js";
import postNotes from "../Controllers/postNotes.js";
import editNotes from "../Controllers/putNotes.js";
import deleteNotes from "../Controllers/deleteNotes.js";

export default function notes(express, userRepo, uuid) {
  const router = express.Router();
  const getNotesHandler = getNotes(userRepo);
  const postNotesHandler = postNotes(userRepo, uuid);
  const editNotesHandler = editNotes(userRepo);
  const deleteNotesHandler = deleteNotes(userRepo);

  router.get("/", getNotesHandler);
  router.post("/", postNotesHandler);
  router.put("/", editNotesHandler);
  router.delete("/", deleteNotesHandler);

  return router;
}
