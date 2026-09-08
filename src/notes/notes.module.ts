import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';

@Module({
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
