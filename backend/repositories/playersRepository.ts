import { docClient } from "../lib/dynamodb";
import {
  PutCommand,
  GetCommand,
  ScanCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = "players";

export const playersRepository = {
  async getAll() {
    const command = new ScanCommand({
      TableName: TABLE_NAME,
    });
    
    const response = await docClient.send(command);
    return response.Items || [];
  },

  async getById(id: string) {
    const command = new GetCommand({
      TableName: TABLE_NAME,
      Key: { id },
    });

    const response = await docClient.send(command);
    return response.Item || null;
  },

  async create(data: any) {
    const now = new Date().toISOString();
    const newPlayer = {
      ...data,
      id: data.id || crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    };

    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: newPlayer,
    });

    await docClient.send(command);
    return newPlayer;
  },

  async update(id: string, data: any) {
    const currentItem = await this.getById(id);
    if (!currentItem) return null;

    const updatedAt = new Date().toISOString();
    const updatedItem = { ...currentItem, ...data, updatedAt };

    const command = new PutCommand({
      TableName: TABLE_NAME,
      Item: updatedItem,
    });

    await docClient.send(command);
    return updatedItem;
  },

  async delete(id: string) {
    const command = new DeleteCommand({
      TableName: TABLE_NAME,
      Key: { id },
    });

    await docClient.send(command);
  },
};
