import { DataSource } from "typeorm";
import { Task } from "../entity/Task";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "todo",
  synchronize: true,
  logging: false,
  entities: [Task],
  subscribers: [],
  migrations: [],   
});
