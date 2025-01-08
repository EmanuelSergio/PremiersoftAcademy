import { UploadController } from './upload/upload.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [UploadController, AppController],
  providers: [AppService],
})
export class AppModule {}
