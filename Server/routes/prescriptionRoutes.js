import { Router } from "express";
import upload from "../middleware/uploadMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadPrescription } from "../controllers/prescriptionController.js";

const router = Router();

router.post(
  "/upload",
  authMiddleware,
  upload.single("prescription"),
  uploadPrescription
);

export default router;