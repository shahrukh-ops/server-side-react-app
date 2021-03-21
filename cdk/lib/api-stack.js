"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStack = void 0;
const cdk = require("@aws-cdk/core");
const core_1 = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const apigw = require("@aws-cdk/aws-apigateway");
class ApiStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const apiFunction = new lambda.Function(this, "apiHandler", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code: lambda.Code.fromAsset("../pbr-isomorph-app/api"),
            memorySize: 128,
            timeout: core_1.Duration.seconds(5),
            handler: "index.handler"
        });
        const api = new apigw.LambdaRestApi(this, "apiEndpoint", {
            handler: apiFunction,
            defaultCorsPreflightOptions: {
                allowOrigins: apigw.Cors.ALL_ORIGINS,
                allowMethods: apigw.Cors.ALL_METHODS
            }
        });
        new cdk.CfnOutput(this, "apiurl", { value: api.url });
    }
}
exports.ApiStack = ApiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBpLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyx3Q0FBeUM7QUFDekMsOENBQThDO0FBQzlDLGlEQUFpRDtBQUVqRCxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsS0FBSztJQUNyQyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQzFELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDO1lBQ3RELFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLGVBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sRUFBRSxlQUFlO1NBQ3pCLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3ZELE9BQU8sRUFBRSxXQUFXO1lBQ3BCLDJCQUEyQixFQUFFO2dCQUMzQixZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNwQyxZQUFZLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXO2FBQ3JDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGO0FBdEJELDRCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xyXG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tIFwiQGF3cy1jZGsvYXdzLWxhbWJkYVwiO1xyXG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcGlTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGFwaUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImFwaUhhbmRsZXJcIiwge1xyXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwiLi4vcGJyLWlzb21vcnBoLWFwcC9hcGlcIiksXHJcbiAgICAgIG1lbW9yeVNpemU6IDEyOCxcclxuICAgICAgdGltZW91dDogRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgaGFuZGxlcjogXCJpbmRleC5oYW5kbGVyXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlndy5MYW1iZGFSZXN0QXBpKHRoaXMsIFwiYXBpRW5kcG9pbnRcIiwge1xyXG4gICAgICBoYW5kbGVyOiBhcGlGdW5jdGlvbixcclxuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiB7XHJcbiAgICAgICAgYWxsb3dPcmlnaW5zOiBhcGlndy5Db3JzLkFMTF9PUklHSU5TLFxyXG4gICAgICAgIGFsbG93TWV0aG9kczogYXBpZ3cuQ29ycy5BTExfTUVUSE9EU1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCBcImFwaXVybFwiLCB7IHZhbHVlOiBhcGkudXJsIH0pO1xyXG4gIH1cclxufSJdfQ==