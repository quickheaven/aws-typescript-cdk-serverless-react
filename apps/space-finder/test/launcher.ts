import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(__dirname, "../.env") });

import { handler } from "../src/services/spaces/handler";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

handler(
  {
    httpMethod: "GET",
    queryStringParameters: {
      id: "ba3a48c1-bc26-48de-b167-988051da5e16",
    },
    //body: JSON.stringify({
    //  location: "Dublin",
    //}),
  } as unknown as APIGatewayProxyEvent,
  {} as Context,
);
