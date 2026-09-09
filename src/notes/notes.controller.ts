import { Controller, Post, Body, Get } from '@nestjs/common';
import { NotesService } from './notes.service';

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
}
