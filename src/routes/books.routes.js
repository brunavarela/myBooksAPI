import { Router } from "express";

import createBookController from "../controllers/createBook.controller";
import deleteBookController from "../controllers/deleteBook.controller";
import listBooksController from "../controllers/listBooks.controller";
import updateBookController from "../controllers/updateBook.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("", verifyAuthTokenMiddleware, createBookController);
router.get("", listBooksController);
router.put("/:id", verifyAuthTokenMiddleware, updateBookController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteBookController);

export default router;
