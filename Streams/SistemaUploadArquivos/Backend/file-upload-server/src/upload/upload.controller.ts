// src/upload/upload.controller.ts
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { extname, join } from 'path';
import { UploadResponse } from '../interfaces/upload.interface';
import { diskStorage } from 'multer';

const ALLOWED_AUDIO_TYPES = [
  'audio/mpeg',
  'audio/wav',
  'audio/ogg',
  'audio/x-m4a',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024;

@Controller('upload')
export class UploadController {
  @Post('video')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('video/')) {
          return cb(
            new BadRequestException('Formato de vídeo não suportado'),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 100 * 1024 * 1024, // 100MB
      },
    }),
  )
  async uploadVideo(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponse> {
    if (!file) {
      throw new BadRequestException('nenhum arquivo enviado');
    }

    return {
      message: 'arquivo salvo com sucesso',
      filename: file.filename,
      size: file.size,
      type: file.mimetype,
    };
  }

  @Post('audio')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!ALLOWED_AUDIO_TYPES.includes(file.mimetype)) {
          return cb(
            new BadRequestException('formato de audio n suportado'),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: MAX_FILE_SIZE,
      },
    }),
  )
  async uploadAudio(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UploadResponse> {
    if (!file) {
      throw new BadRequestException('Nenhum arquivo de áudio enviado');
    }

    return {
      message: 'Arquivo de áudio enviado com sucesso',
      filename: file.filename,
      size: file.size,
      type: file.mimetype,
    };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
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
        message: 'Arquivo enviado com sucesso',
        filename: file.originalname,
        size: file.size,
        type: file.mimetype,
      };
    } catch (error) {
      throw new BadRequestException('Erro ao processar arquivo');
    }
  }
}
