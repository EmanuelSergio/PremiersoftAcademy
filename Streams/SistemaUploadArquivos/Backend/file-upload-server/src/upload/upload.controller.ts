import { BadRequestException, Controller, UploadedFile } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { UploadResponse } from 'src/interfaces/upload.interface';

@Controller('upload')
export class UploadController {
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponse> {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }

    try {
      const uploadPath = join(__dirname, '..', '..', 'uploads');
      const writeStream = createWriteStream(
        join(uploadPath, file.originalname),
      );

      writeStream.write(file.buffer);
      writeStream.end();

      return {
        message: 'arquivo enviado com sucesso',
        filename: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new BadRequestException('erro ao processro o arquivo');
    }
  }
}
