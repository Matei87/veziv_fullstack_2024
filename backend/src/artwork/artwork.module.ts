import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtworkService } from './artwork.service';
import { ArtworkController } from './artwork.controller';
import { ArtworkSchema } from './artwork.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Artwork', schema: ArtworkSchema }]),
  ],
  providers: [ArtworkService],
  controllers: [ArtworkController],
})
export class ArtworkModule {}
