import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetricasModule } from './metricas/metricas.module';

@Module({
  imports: [MetricasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
