export default function sever(app) {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
