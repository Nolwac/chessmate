import { Controller, Param, Post, Get, Body } from '@nestjs/common';
import { GameDto } from './dto/game.dto';
import { MoveDto } from './dto/move.dto';

@Controller('api/games')
// POST /api/games/:id/moves - Make a move
// GET /api/games/:id/moves - Get move history
// GET /api/games/:id/analysis - a move analysis summary for the game

export class GameController {
    @Get('/:id')
    getOne(@Param('id') id){
        return id // should return the details of the game from the injected provider
    }

    @Post('/:id')
    createGame(@Body() gameData: GameDto, @Param('id') id){
        return gameData
    }

    @Get('/:id/moves')
    getHistory(@Param('id') id){
        return id // should return the move history
    }

    @Post('/:id/moves')
    movePiece(@Body() move: MoveDto, @Param('id') id){
        return move
    }
}
