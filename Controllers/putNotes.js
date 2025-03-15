import handlePut from "./useCases/handlePut.js";

export default function putNotes(userRepo) {
  return async (req, res, next) => {
    try {
      const noteId = req.query.id;
      const changes = req.body;
      const noteChange = await handlePut(userRepo, noteId, changes);

      res.json({
        message: "Notes updated successfully",
        data: noteChange,
      });
    } catch (err) {
      next(err);
    }
  };
}
