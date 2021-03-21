#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("@aws-cdk/core");
const api_stack_1 = require("../lib/api-stack");
//import { SsrStack } from "../lib/srr-stack";
const demoEnv = { region: "us-east-2" };
const app = new cdk.App();
new api_stack_1.ApiStack(app, "BackEndApi", { env: demoEnv });
//new SsrStack(app, "SSRAppStack", { env: demoEnv });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyxxQ0FBcUM7QUFDckMsZ0RBQTRDO0FBQzVDLDhDQUE4QztBQUU5QyxNQUFNLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUN4QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLG9CQUFRLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELHFEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcbmltcG9ydCBcInNvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3RlclwiO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQgeyBBcGlTdGFjayB9IGZyb20gXCIuLi9saWIvYXBpLXN0YWNrXCI7XG4vL2ltcG9ydCB7IFNzclN0YWNrIH0gZnJvbSBcIi4uL2xpYi9zcnItc3RhY2tcIjtcblxuY29uc3QgZGVtb0VudiA9IHsgcmVnaW9uOiBcInVzLWVhc3QtMlwiIH07XG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IEFwaVN0YWNrKGFwcCwgXCJCYWNrRW5kQXBpXCIsIHsgZW52OiBkZW1vRW52IH0pO1xuLy9uZXcgU3NyU3RhY2soYXBwLCBcIlNTUkFwcFN0YWNrXCIsIHsgZW52OiBkZW1vRW52IH0pO1xuXG5cbiJdfQ==