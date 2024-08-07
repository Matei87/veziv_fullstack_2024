import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArtworkService } from './artwork.service';
import { Artwork } from './artwork.interface';

@Controller('artworks')
export class ArtworkController {
  constructor(private readonly artworkService: ArtworkService) {}

  @Get()
  async findAll() {
    return await this.artworkService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.artworkService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(@UploadedFile() file, @Body() body: Artwork) {
    return await this.artworkService.create(body);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  async update(
    @Param('id') id: string,
    @UploadedFile() file,
    @Body() body: Artwork,
  ) {
    return await this.artworkService.update(id, body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.artworkService.remove(id);
  }
}
