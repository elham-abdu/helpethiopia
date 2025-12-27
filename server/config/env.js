<<<<<<< HEAD
import { config } from "dotenv";

config({ path: ".env" });

export const { SERVER_URL, PORT, DB_URL, CHAPA_PUBLIC_KEY, CHAPA_SECRET_KEY } =
  process.env;
=======
require("dotenv").config();
const BASE_URL = process.env.CLIENT_URL;

module.exports = {
  BASE_URL,
};
>>>>>>> teammate/main
