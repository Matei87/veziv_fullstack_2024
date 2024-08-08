import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtworkModule } from './artwork/artwork.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/artist-portfolio'),
    ArtworkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
