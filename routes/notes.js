import getNotes from "../Controllers/getNotes.js";
// import postNotes from "../Controllers/postNotes.js";
// import editNotes from "../Controllers/editNotes.js";
// import deleteNotes from "../Controllers/deleteNotes.js";

export default function notes(express, mysql) {
  const router = express.Router();
  const getNotesHandler = getNotes(mysql);
  //   const postNotesHandler = postNotes(mysql);
  //   const editNotesHandler = editNotes(mysql);
  //   const deleteNotesHandler = deleteNotes(mysql);

  router.get("/", getNotesHandler);
  //   router.post("/", postNotesHandler);
  //   router.put("/", editNotesHandler);
  //   router.delete("/", deleteNotesHandler);

  return router;
}
