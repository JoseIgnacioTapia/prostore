import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  const prisma = new PrismaClient();

  try {
    console.log('Eliminando datos existentes...');
    await prisma.product.deleteMany();

    console.log('Insertando nuevos datos...');
    await prisma.product.createMany({ data: sampleData.products });

    console.log('Datos de muestra insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
