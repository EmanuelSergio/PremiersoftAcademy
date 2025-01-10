import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  ParseFloatPipe,
} from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pizzas')
@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  @Post()
  @ApiOperation({ summary: 'cria uma pizza' })
  @ApiResponse({ status: 201, description: 'pizza criada com sucesso' })
  create(@Body() dados: CreatePizzaDto) {
    return this.pizzasService.create(dados);
  }

  @Get()
  @ApiOperation({ summary: 'lista todas as pizzas' })
  findAll() {
    return this.pizzasService.findAll();
  }

  @Get('preco')
  findByPrice(
    @Query('minPrice', ParseFloatPipe) minPrice: number,
    @Query('maxPrice', ParseFloatPipe) maxPrice: number,
  ) {
    return this.pizzasService.findByPrice(minPrice, maxPrice);
  }

  @Get('disponivel')
  findAvailable() {
    return this.pizzasService.findAvailable();
  }

  @Get(':id')
  @ApiOperation({ summary: 'busca uma pizza por id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pizzasService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'atualiza a pizza' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dados: UpdatePizzaDto) {
    return this.pizzasService.update(id, dados);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'deleta a pizza' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.pizzasService.remove(id);
  }
}
