import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Note } from './note.entity';
import { Repository, DeleteResult } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

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

    async markAsDone(id: number): Promise<Note> {
        await this.notesRepository.update(id, {done: true});
        const note = await this.notesRepository.findOne({where: {id}});
        if (!note) {
            throw new NotFoundException(`Note with id ${id} not found`);
        }
        return note;
    }

    async remove(id: number): Promise<void> {
        const result = await this.notesRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Note with id ${id} not found`);
        }
    }
}
