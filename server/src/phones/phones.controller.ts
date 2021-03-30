import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import * as slug from 'slug';

import { Phone } from './phone.interface';
import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreatePhoneDto } from './create-phone.dto';
import { PhonesService } from './phones.service';
import { PhoneDto } from './phone.dto';

@Controller('phones')
@ApiTags('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Get()
  @ApiOperation({
    description: 'Get phone list',
  })
  @ApiOkResponse({
    type: PhoneDto,
    isArray: true,
  })
  async findAll(): Promise<PhoneDto[]> {
    return this.phonesService.findAll();
  }

  @Get(':phoneId')
  @ApiOperation({
    description: 'Get phone detail',
  })
  @ApiOkResponse({
    status: 200,
    type: PhoneDto,
    isArray: false,
  })
  async findById(@Param() phoneId): Promise<PhoneDto> {
    return this.phonesService.findById(phoneId);
  }

  @Post()

  @ApiOperation({
    description: 'Create new phone',
  })
  @ApiCreatedResponse({
    type: PhoneDto,
    isArray: false,
  })
  async create(@Body() createPhoneDto: CreatePhoneDto) {
    const newEntry = Object.assign({}, createPhoneDto);
    await this.phonesService.create(newEntry);
  }

  @Delete(':phoneId')
  @ApiOperation({
    description: 'Delete phone',
  })
  delete(@Param('phoneId') phoneId) {
    return this.phonesService.deleteOne(phoneId);
  }
}
