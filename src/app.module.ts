import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetricasModule } from './metricas/metricas.module';
import { MetricasMiddleware } from './middlewares/metricas/metricas.middleware';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [MetricasModule, UsuariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure (cunsumer: MiddlewareConsumer){
    cunsumer.apply(MetricasMiddleware).forRoutes('*')
  }
}
 