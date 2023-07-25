import { StateShema } from "app/providers/ThemeProviders/StoreProvider/config/StateShema";
import { LoginShema } from "../types/LoginShema";
import { loginActions, loginReducer } from "./LoginSlice";

describe("LoginSlice", () => {
  test("userName", () => {
    const state: DeepPartial<LoginShema> = {
      username: "user",
    };
    expect(
      loginReducer(state as LoginShema, loginActions.setUsername("user"))
    ).toEqual({username: "user"});
  });

  test("password", () => {
    const state: DeepPartial<LoginShema> = {
      password: "123",
    };
    expect(
      loginReducer(state as LoginShema, loginActions.setPassword("123"))
    ).toEqual({password:"123"});
  });
});
