import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(() => {
    console.log('Conectado ao PostgreSQL com sucesso');
    const app = express();
    app.use(express.json());
    app.use(routes);
    return app.listen(process.env.PORT);
});