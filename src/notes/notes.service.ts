import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
    constructor(
        @InjectRepository(Note) private notesRepository: Repository<Note>,
    ) {}

    async findAll(): Promise<Note[]> {
        return this.notesRepository.find();
    }
    
    async create(title:string): Promise<Note> {
        const note = this.notesRepository.create({title, done: false});
        return this.notesRepository.save(note);
    }
}
