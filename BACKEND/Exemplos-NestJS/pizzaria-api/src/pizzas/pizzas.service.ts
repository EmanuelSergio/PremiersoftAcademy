import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Pizza } from './entities/pizza.entity';

@Injectable()
export class PizzasService {
  constructor(private prisma: PrismaService) {}

  async create(createPizzaDto: CreatePizzaDto) {
    return this.prisma.pizza.create({
      data: createPizzaDto,
    });
  }

  async findAll() {
    return this.prisma.pizza.findMany();
  }

  async findOne(id: number) {
    const pizza = await this.prisma.pizza.findUnique({
      where: { id },
    });

    if (!pizza) {
      throw new NotFoundException(`pizza com id ${id} nao foi encontrado`);
    }

    return pizza;
  }

  async update(id: number, updatePizzaDto: UpdatePizzaDto) {
    try {
      return await this.prisma.pizza.update({
        where: { id },
        data: updatePizzaDto,
      });
    } catch (error) {
      throw new NotFoundException(`pizza com id ${id} nao foi encontrado`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.pizza.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Categoria com ID ${id} não encontrada`);
    }
  }

  async findAvailable() {
    return await this.prisma.pizza.findMany({ where: { isAvailable: true } });
  }

  async findByPrice(minpreco: number, maxpreco: number) {
    return await this.prisma.pizza.findMany({
      where: { price: { gte: minpreco, lte: maxpreco } },
    });
  }
}
