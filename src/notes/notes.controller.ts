import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { HttpCode } from '@nestjs/common';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {}

    @Post()
    create(@Body('title') title:string){
        return this.notesService.create(title);
    }

    @Get()
    findAll(){
        return this.notesService.findAll();
    }

    @Patch(':id')
    markAsDone(@Param('id') id: number){
        return this.notesService.markAsDone(Number(id));
    }

    @Delete(':id')
    @HttpCode(204)
    remove(@Param('id') id: number): Promise<void>{
        return this.notesService.remove(Number(id));
    }
}
