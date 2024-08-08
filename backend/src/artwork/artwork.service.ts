import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Artwork } from './artwork.interface';

@Injectable()
export class ArtworkService {
  constructor(
    @InjectModel('Artwork') private readonly artworkModel: Model<Artwork>,
  ) {}

  async findAll(): Promise<Artwork[]> {
    return await this.artworkModel.find().exec();
  }

  async findOne(id: string): Promise<Artwork> {
    return await this.artworkModel.findById(id).exec();
  }

  async create(artwork: Artwork): Promise<Artwork> {
    const newArtwork = new this.artworkModel(artwork);
    return await newArtwork.save();
  }

  async update(id: string, artwork: Artwork): Promise<Artwork> {
    return await this.artworkModel
      .findByIdAndUpdate(id, artwork, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return await this.artworkModel.findByIdAndDelete(id).exec();
  }
}
