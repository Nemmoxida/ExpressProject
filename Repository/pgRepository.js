class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getUser(user) {
    const username = user;
    console.log(user);
    const result = await this.db.query(
      "SELECT * FROM users WHERE username = $1",
      [username],
    );
    return result.rows;
  }

  async getAllAccounts() {
    const result = await this.db.query("SELECT * FROM users");

    return result.rows;
  }

  async addUser(user, password) {
    const result = await this.db.query(
      "INSERT INTO users(username, password) VALUES($1,$2)",
      [user, password],
    );

    return result.rows;
  }

  async getAll(user) {
    const userId = user;
    const result = await this.db.query(
      "SELECT * FROM notes WHERE id_user = $1",
      [userId],
    );
    return result.rows;
  }

  async get(user, keyword) {
    const userId = user;
    const result = await this.db.query(
      "SELECT * FROM notes WHERE id_user = $1 AND (title ILIKE $2 OR content ILIKE $3)",
      [userId, `%${keyword}%`, `%${keyword}%`],
    );
    return result.rows;
  }

  async post(note) {
    const result = await this.db.query(
      "INSERT INTO notes (title, content, id_user) VALUES ($1, $2, $3)",
      [note.title, note.content, note.userId],
    );
    return result;
  }

  async put(noteId, title, content) {
    const result = await this.db.query(
      "UPDATE notes SET title = $1, content = $2 WHERE id = $3",
      [title, content, noteId],
    );
    return result;
  }

  async delete(noteId) {
    const result = await this.db.query("DELETE FROM notes WHERE id = $1", [
      noteId,
    ]);
    return result;
  }
}

export default userRepository;
