import handleDelete from "./useCases/handleDelete.js";

export default function deleteNotes(userRepo) {
  return (req, res, next) => {
    try {
      const noteId = req.query.id;
      const deleteNote = handleDelete(userRepo, noteId);

      res.json({
        message: "Note deleted successfully",
        data: deleteNote,
      });
    } catch (err) {
      next(err);
    }
  };
}
