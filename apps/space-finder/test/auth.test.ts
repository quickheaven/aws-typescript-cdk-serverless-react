import { AuthService } from "./AuthService";

test("auth login and get id token", async () => {
  const service = new AuthService();
  const loginResult = await service.login(
    process.env.TEST_USERNAME!,
    process.env.TEST_PASSWORD!,
  );
  const idToken = await service.getIdToken();
  console.log(idToken);
  expect(idToken).toBeDefined();
  const credentials = await service.generateTemporaryCredentials();
});
