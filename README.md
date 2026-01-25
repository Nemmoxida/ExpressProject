# ExpressProject

A Clean Architecture Express.js API.

## Setup & Run

1. **Clone the repository**

   ```sh
   git clone <your-repo-url>
   cd ExpressProject
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**
   - Copy or edit `global.env` as needed for your database and JWT settings.

4. **Choose your database**
   - By default, the project uses PostgreSQL. To switch to MySQL, update the related lines in `app.js` (uncomment MySQL and comment PostgreSQL).

5. **Run the project**
   - For development (with auto-reload):
     ```sh
     npm run dev
     ```
   - For production:
     ```sh
     npm start
     ```

6. **API Documentation**
   - Visit [http://localhost:3000/docs](http://localhost:3000/docs) for Swagger UI.
