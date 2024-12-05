import express, { Application, Request, Response } from "express";
import cors from "cors";
import { authRoutes } from "./modules/auth/route.auth";
import { productRouts } from "./modules/products/routes.products";
import globalErrorHandler from "./middlewares/globalHandler";
import notFound from "./middlewares/NotFound";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// APIs
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/product", productRouts);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Global Error
app.use(globalErrorHandler);
app.use(notFound);

export default app;
