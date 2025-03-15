import handlePost from "./useCases/handlePost.js";

export default function postNotes(userRepo, uuid) {
  return async (req, res, next) => {
    try {
      const data = req.body;
      const user = req.user.id;
      const post = await handlePost(userRepo, uuid, data, user);

      if (!post) {
        return next(new Error("Failed to post notes"));
      }

      res.json({
        message: "Notes posted successfully",
        data: post,
      });
    } catch (err) {
      next(err);
    }
  };
}
