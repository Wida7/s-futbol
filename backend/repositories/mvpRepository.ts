import { docClient } from "../lib/dynamodb";

import {
	PutCommand,
	GetCommand,
	ScanCommand,
	QueryCommand,
} from "@aws-sdk/lib-dynamodb";

const TABLE_NAME = "mvp_votes";

export interface CreateVoteDTO {
	voterId: number;
	voterName: string;

	mvpId: number;
	mvpName: string;

	matchId: string;
}

export const mvpVotesRepository = {

	async getAll() {

		const command = new ScanCommand({
			TableName: TABLE_NAME,
		});

		const response = await docClient.send(command);

		return response.Items ?? [];
	},

	async getByVoter(voterId: number) {

		const command = new GetCommand({
			TableName: TABLE_NAME,
			Key: {
				voterId,
			},
		});

		const response = await docClient.send(command);

		return response.Item ?? null;
	},

	async create(data: CreateVoteDTO) {

		const vote = {
			...data,
			createdAt: new Date().toISOString(),
		};

		const command = new PutCommand({

			TableName: TABLE_NAME,
			Item: vote,

		});

		await docClient.send(command);

		return vote;
	},

	async getByMatchId(matchId: string) {
		const command = new QueryCommand({
			TableName: TABLE_NAME,
			KeyConditionExpression: "matchId = :matchId",
			ExpressionAttributeValues: {
				":matchId": matchId,
			},
		});

		const response = await docClient.send(command);

		return response.Items ?? [];
	},

	async getResultsByMatchId(matchId: string) {

		const votes = await this.getByMatchId(matchId);
		const ranking = new Map();

		for (const vote of votes) {
			const current = ranking.get(vote.mvpId);
			if (current) {
				current.votes++;
			} else {
				ranking.set(vote.mvpId, {
					playerId: vote.mvpId,
					playerName: vote.mvpName,
					votes: 1,
				});
			}
		}
		
		return [...ranking.values()].sort((a, b) => b.votes - a.votes);
	}
};

