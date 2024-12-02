import Chance from "chance";
import readline from "node:readline";
import { createUser } from "./models/register-model.js";
import { createNewProduct } from "./models/post-model.js"; // Función para crear productos desde tu API

global.localStorage = {
    storage: {},
    getItem(key) {
        return this.storage[key] || null;
    },
    setItem(key, value) {
        this.storage[key] = value;
    },
    removeItem(key) {
        delete this.storage[key];
    },
    clear() {
        this.storage = {};
    },
};

// Configura un token de prueba para la API
localStorage.setItem('jwt', 'TU_TOKEN_DE_PRUEBA');

const chance = new Chance();

// Utilidad para preguntar en consola
async function ask(questionText) {
    return new Promise((resolve) => {
        const consoleInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        consoleInterface.question(questionText, (answer) => {
            consoleInterface.close();
            resolve(answer);
        });
    });
}

// Confirmación para reiniciar datos
const questionResponse = await ask("Are you sure you want to reset the database and create initial data? (yes/no) ");

if (questionResponse.toLowerCase() !== "yes") {
    console.log("Operation aborted.");
    process.exit();
}

async function initializeDB() {
    try {
        console.log("Initializing database...");

        // Crear usuarios iniciales
        console.log("Creating initial users...");
        const users = [
            { email: "admin@example.com", password: "password123" },
            { email: "user1@example.com", password: "password123" },
            { email: "user2@example.com", password: "password123" },
            { email: "user3@example.com", password: "password123" },
            { email: "user4@example.com", password: "password123" },
            { email: "user5@example.com", password: "password123" },
            { email: "user6@example.com", password: "password123" },
            { email: "user7@example.com", password: "password123" },
            { email: "user8@example.com", password: "password123" },
            { email: "user9@example.com", password: "password123" },
        ];

        const userIds = [];
        for (const user of users) {
            await createUser(user.email, user.password); // Crea usuario con la API
            userIds.push(user.email); // Usamos email como identificador
        }

        console.log("Users created successfully.");

        // Crear tags y productos
        const tags = ["work", "lifestyle", "motor", "mobile"];
        console.log("Creating products...");
        let totalProducts = 0;

        // Usuarios con 1-3 productos
        for (let i = 0; i < 5; i++) {
            const numProducts = Math.floor(Math.random() * 3) + 1;
            for (let j = 0; j < numProducts; j++) {
                const product = generateRandomProduct(tags, userIds[i]);
                await createNewProduct(product);
                totalProducts++;
            }
        }

        // Usuarios con 14-20 productos
        for (let i = 5; i < 8; i++) {
            const numProducts = Math.floor(Math.random() * 7) + 14;
            for (let j = 0; j < numProducts; j++) {
                const product = generateRandomProduct(tags, userIds[i]);
                await createNewProduct(product);
                totalProducts++;
            }
        }

        // Usuarios con 30 productos
        for (let i = 8; i < 10; i++) {
            for (let j = 0; j < 30; j++) {
                const product = generateRandomProduct(tags, userIds[i]);
                await createNewProduct(product);
                totalProducts++;
            }
        }

        console.log(`Created ${totalProducts} products successfully.`);
        console.log("Database initialization complete.");
    } catch (error) {
        console.error("Error initializing database:", error.message);
    }
}

// Función para generar productos aleatorios
function generateRandomProduct(tags, userEmail) {
    const numTags = Math.floor(Math.random() * 4) + 1;
    const selectedTags = Array.from({ length: numTags }, () =>
        tags[Math.floor(Math.random() * tags.length)]
    );

    return {
        productName: chance.word({ syllables: 3 }),
        productDescription: chance.sentence({ words: 5 }),
        price: chance.integer({ min: 50, max: 5000 }),
        picture: `https://example.com/product${chance.integer({ min: 1, max: 1000 })}.jpg`,
        tags: selectedTags,
        transaction: chance.pickone(["Compra", "Venta"]),
        userId: userEmail,
    };
}

// Ejecuta la inicialización
await initializeDB();
