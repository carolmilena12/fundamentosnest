import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Metrica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ruta: string;

  @Column()
  metodo: string;

  @Column()
  timestamp: Date;

  @Column({ nullable: true })
  usuarioId?: string;
}
