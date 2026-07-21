import { NextRequest, NextResponse } from "next/server";
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";

import { mvpVotesRepository } from "@/backend/repositories/mvpRepository";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      voterId,
      voterName,
      mvpId,
      mvpName,
      matchId,
    } = body;

    // Validaciones básicas
    if (
      voterId === undefined ||
      !voterName ||
      mvpId === undefined ||
      !mvpName ||
      !matchId
    ) {
      return NextResponse.json(
        {
          message: "Datos incompletos.",
        },
        {
          status: 400,
        }
      );
    }

    if (voterId === mvpId) {
      return NextResponse.json(
        {
          message: "No puedes votar por ti mismo.",
        },
        {
          status: 400,
        }
      );
    }

    const vote = await mvpVotesRepository.create({
      voterId,
      voterName,
      mvpId,
      mvpName,
      matchId,
    });

    return NextResponse.json(vote, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof ConditionalCheckFailedException) {
      return NextResponse.json(
        {
          message: "Este jugador ya registró su voto.",
        },
        {
          status: 409,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Error interno del servidor.",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET(request: NextRequest) {
  try {
    const matchId = request.nextUrl.searchParams.get("matchId");

    if (!matchId) {
      return NextResponse.json(
        { message: "matchId es requerido." },
        { status: 400 }
      );
    }

    const results = await mvpVotesRepository.getResultsByMatchId(matchId);

    return NextResponse.json(results);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
