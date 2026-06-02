#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PhotosStack } from "../lib/PhotosStack";
import { PhotosHandlerStack } from "../lib/PhotosHandlerStack";

const app = new cdk.App();
new PhotosStack(app, "PhotosStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PhotosHandlerStack(app, "PhotosHandlerStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
