import { sql } from "./db.js";

(async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS videos (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      title TEXT,
      description TEXT,
      duration INTEGER
    )
  `;
})();

