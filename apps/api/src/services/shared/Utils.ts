import { APIGatewayProxyEvent } from "aws-lambda";
import { JsonError } from "./Validator";
import { randomUUID } from "crypto";

export function createRandomId() {
  return randomUUID();
}

export function parseJSON(arg: string) {
  try {
    return JSON.parse(arg);
  } catch (error) {
    throw new JsonError(error instanceof Error ? error.message : String(error));
  }
}

export function hasAdminGroup(event: APIGatewayProxyEvent) {
  const groups = event.requestContext.authorizer?.claims["cognito:groups"];
  if (groups) {
    return (groups as string).includes("admins");
  }
  return false;
}
