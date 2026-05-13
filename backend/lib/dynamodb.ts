import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const createDynamoDbClient = () => {
  return new DynamoDBClient({
    region: process.env.ENV_AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID || "",
      secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY || "",
    },
  });
};

const client = createDynamoDbClient();

export const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});
