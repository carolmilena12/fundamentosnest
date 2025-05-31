import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MetricasService } from './metricas.service';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';
import { Metrica } from './entities/metrica.entity';
import { GetAllMetricasDTO } from './dto/getAll-metricas.dto';
import { GetOneMetricaDTO } from './dto/getOne-metrica.dto';

@Controller('metricas')
export class MetricasController {
  constructor(private readonly metricasService: MetricasService) {}

  @Post('uso')
  async create(@Body() createMetricaDto: CreateMetricaDto):Promise<Metrica> {
    return await this.metricasService.create(createMetricaDto);
  }

  @Get()
  async findAll(@Query() GetAllMetricasDTO) {
    return this.metricasService.findAll(GetAllMetricasDTO);
  }

  @Get(':id')
  findOne(@Param() GetOneMetricaDTO) {
    return this.metricasService.findOne(GetOneMetricaDTO);
  }

  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricaDto: UpdateMetricaDto) {
    return this.metricasService.update(+id, updateMetricaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricasService.remove(+id);
  }
}
