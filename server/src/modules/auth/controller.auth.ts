import { Request, Response } from "express";
import { authServicses } from "./services.auth";
import config from "../../config";
import catchError from "../../utils/catchError";

const register = catchError(async (req: Request, res: Response) => {
  const userData = req.body;

  const { accessToken, refreshToken, result } = await authServicses.register(
    userData
  );

  const resultDataObject = result.toObject();

  const resultData = {
    ...resultDataObject,
    accessToken,
  };

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
  });

  res.status(201).json({
    success: true,
    message: "User Register success",
    data: resultData,
  });
});

// login
const login = catchError(async (req: Request, res: Response) => {
  const userData = req.body;

  const { accessToken, refreshToken } = await authServicses.login(userData);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
  });

  res.status(201).json({
    success: true,
    message: "User login success",
    data: accessToken,
  });
});

export const authControllers = {
  register,
  login,
};
