import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });

import { handler } from "../src/services/spaces/handler";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

handler(
  {
    httpMethod: "GET",
    //body: JSON.stringify({
    //  location: "Dublin",
    //}),
  } as APIGatewayProxyEvent,
  {} as Context,
);
