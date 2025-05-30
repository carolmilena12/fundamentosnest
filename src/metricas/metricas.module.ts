import { Module } from '@nestjs/common';
import { MetricasService } from './metricas.service';
import { MetricasController } from './metricas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metrica } from './entities/metrica.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      name: 'metricsConnection', // Nombre único para esta conexión
      type: 'sqlite',
      database: 'db/metrics.db',
      entities: [Metrica],
      synchronize: true, // ¡SOLO PARA DESARROLLO!
      logging: true, // Opcional: ver SQL generado
    }),
    TypeOrmModule.forFeature([Metrica], 'metricsConnection'), // Especificar conexión
 
  ],
  controllers: [MetricasController],
  providers: [MetricasService],
  exports:[MetricasService]
})
export class MetricasModule {}
