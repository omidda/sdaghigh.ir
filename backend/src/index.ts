import app from "./app";
import { Settings } from "../settings"

app.listen(Settings.port, () => {
    console.log("SDAGHIGH Resr services runned at http://localhost:3000");
 })