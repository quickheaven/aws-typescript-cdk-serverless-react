import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });

import { handler } from "../src/services/spaces/handler";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

handler(
  {
    httpMethod: "DELETE",
    queryStringParameters: {
      id: "4fc4814e-9bad-4e73-b2f1-5cc7b5f73b7b",
    },
    //body: JSON.stringify({
    //  location: "Dublin",
    //}),
    //body: JSON.stringify({
    //  location: "Dublin updated",
    //}),
  } as unknown as APIGatewayProxyEvent,
  {} as Context,
);
