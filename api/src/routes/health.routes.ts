import { type Request, type Response, Router } from "express";

const router = Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "Running",
  });
});

export default router;
