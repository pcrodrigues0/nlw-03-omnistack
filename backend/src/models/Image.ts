import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
// eslint-disable-next-line import/no-cycle
import Orphanage from './Orphanage';

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, (orphanage) => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
