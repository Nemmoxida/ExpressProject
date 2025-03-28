/**
 * @param {import('express').Express} app
 */

export default function sever(app, logger) {
  app.listen(3000, () => {
    // console.log("Server is running on port 3000");
    logger.info("Server is running on port 3000");
  });
}
