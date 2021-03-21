#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { ApiStack } from "../lib/api-stack";
import { SsrStack } from "../lib/app-stack";

const demoEnv = { region: "us-east-2" };
const app = new cdk.App();
new ApiStack(app, "BackEndApi", { env: demoEnv });
new SsrStack(app, "appStack", { env: demoEnv });


