class userRepository {
  constructor(db) {
    this.db = db;
  }

  async getUser(user) {
    const username = user;
    const [getUser] = await this.db.execute(
      "SELECT id FROM users WHERE username = ?",
      [username]
    );
    return getUser;
  }

  async getAll(user) {
    const userId = user;
    const [rows] = await this.db.query(
      "SELECT * FROM notes WHERE id_user = ?",
      [userId]
    );
    return rows;
  }

  async get(user, keyword) {
    const userId = user;
    const [rows] = await this.db.execute(
      "SELECT * FROM notes WHERE id_user = ? AND title LIKE ? OR content LIKE ?",
      [userId, `%${keyword}%`, `%${keyword}%`]
    );
    return rows;
  }

  async post(note) {
    const notePost = await this.db.execute(
      "INSERT INTO notes (id,title,content, id_user) VALUES (?,?,?,?)",
      [note.id, note.title, note.content, note.userId]
    );
    return notePost;
  }

  async put(noteId, changes) {
    const changeNote = await this.db.execute(
      "UPDATE notes SET title =?, content = ? WHERE id = ?",
      [changes.title, changes.content, noteId]
    );
    return changeNote;
  }

  async delete(noteId) {
    const deleteNote = await this.db.execute("DELETE FROM notes WHERE id = ?", [
      noteId,
    ]);
    return deleteNote;
  }
}

export default userRepository;
