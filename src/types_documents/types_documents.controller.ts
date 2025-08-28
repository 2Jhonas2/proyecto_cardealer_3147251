import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesDocumentsService } from './types_documents.service';
import { CreateTypesDocumentDto } from './dto/create-types_document.dto';
import { UpdateTypesDocumentDto } from './dto/update-types_document.dto';

@Controller('types-documents')
export class TypesDocumentsController {
  constructor(private readonly typesDocumentsService: TypesDocumentsService) {}

  @Post()
  create(@Body() createTypesDocumentDto: CreateTypesDocumentDto) {
    return this.typesDocumentsService.create(createTypesDocumentDto);
  }

  @Get()
  findAll() {
    return this.typesDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesDocumentDto: UpdateTypesDocumentDto) {
    return this.typesDocumentsService.update(+id, updateTypesDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesDocumentsService.remove(+id);
  }
}
