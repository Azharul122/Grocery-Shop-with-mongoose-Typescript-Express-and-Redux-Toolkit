import config from "../../config";
import { isPasswordMatched } from "../../utils/comparePass";
import { loginInterface, userInterfce } from "./interface.auth";
import { User } from "./model.auth";
import jwt from "jsonwebtoken";
import { userValidations } from "./validation.auth";

const register = async (data: userInterfce) => {
  const isUserAlreadyExist = await User.findOne({ email: data.email });

  if (isUserAlreadyExist) {
    throw new Error("Already registred");
  }
  const jwtPayload = {
    name: data.fullname,
    email: data.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_at_ex_in,
  });

  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_rt_ex_in,
    }
  );
  
  const validateData = userValidations.registerValidation.parse(data);
  const result = await User.create(validateData);
  return {
    result,
    refreshToken,
    accessToken,
  };
};

// ................ Login ...........
const login = async (payload: loginInterface) => {
  const validatePayload = userValidations.loginValidation.parse(payload);
  const isUserExistInDB = await User.findOne({ email: validatePayload.email });

  if (!isUserExistInDB) {
    throw new Error("User not exist");
  }

  const passwordMatched = await isPasswordMatched(
    validatePayload.password,
    isUserExistInDB.password
  );

  if (!passwordMatched) {
    throw new Error("Password not matched");
  }

  const jwtPayload = {
    name: isUserExistInDB.fullname,

    email: isUserExistInDB.email,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_at_ex_in,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_rt_ex_in,
    }
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authServicses = {
  register,
  login,
};
