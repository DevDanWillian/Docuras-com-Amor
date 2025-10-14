const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function fixImagePaths() {
  try {
    // Get all products
    const products = await prisma.product.findMany();
    
    console.log('Current products:');
    products.forEach(product => {
      console.log(`ID: ${product.id}, Image: ${product.image}`);
    });

    // Update image paths to correct format
    const updates = await Promise.all(
      products.map(async (product) => {
        // Extract filename from the current path
        const filename = product.image.split('/').pop();
        
        // Create correct path
        const correctPath = `/products/${filename}`;
        
        console.log(`Updating ${product.name}: ${product.image} -> ${correctPath}`);
        
        return prisma.product.update({
          where: { id: product.id },
          data: { image: correctPath }
        });
      })
    );

    console.log(`Updated ${updates.length} products successfully!`);
    
    // Verify the updates
    const updatedProducts = await prisma.product.findMany();
    console.log('\nUpdated products:');
    updatedProducts.forEach(product => {
      console.log(`ID: ${product.id}, Image: ${product.image}`);
    });

  } catch (error) {
    console.error('Error fixing image paths:', error);
  } finally {
    await prisma.$disconnect();
  }
}

fixImagePaths();
