import { Injectable } from '@nestjs/common';
import { CreateTypesDocumentDto } from './dto/create-types_document.dto';
import { UpdateTypesDocumentDto } from './dto/update-types_document.dto';

@Injectable()
export class TypesDocumentsService {
  create(createTypesDocumentDto: CreateTypesDocumentDto) {
    return 'This action adds a new typesDocument';
  }

  findAll() {
    return `This action returns all typesDocuments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesDocument`;
  }

  update(id: number, updateTypesDocumentDto: UpdateTypesDocumentDto) {
    return `This action updates a #${id} typesDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesDocument`;
  }
}
