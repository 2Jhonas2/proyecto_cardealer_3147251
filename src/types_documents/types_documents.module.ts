import { Module } from '@nestjs/common';
import { TypesDocumentsService } from './types_documents.service';
import { TypesDocumentsController } from './types_documents.controller';

@Module({
  controllers: [TypesDocumentsController],
  providers: [TypesDocumentsService],
})
export class TypesDocumentsModule {}
