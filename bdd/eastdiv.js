const { Pool } = require("pg");

const s = require("../set");

var dbUrl = s.DB;
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

async function createEastDivTable() {
  const client = await pool.connect();

  try {
    // Créez la table east si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS eastdiv(
        id SERIAL PRIMARY KEY,
        e1 TEXT DEFAULT 'aucun',
        e2 TEXT DEFAULT 'aucun',
        e3 TEXT DEFAULT 'aucun',
        e4 TEXT DEFAULT 'aucun',
        e5 INTEGER DEFAULT 0,
        e6 INTEGER DEFAULT 0,
        e7 INTEGER DEFAULT 0,
        e8 INTEGER DEFAULT 0,
        e9 INTEGER DEFAULT 0,
        e10 INTEGER DEFAULT 0,
        e11 INTEGER DEFAULT 0,
        e12 INTEGER DEFAULT 0,
        e13 INTEGER DEFAULT 0,
        e14 INTEGER DEFAULT 0,
        e15 INTEGER DEFAULT 0,
        e16 INTEGER DEFAULT 0,
        e17 TEXT DEFAULT 'aucun',
        e18 INTEGER DEFAULT 0,
        e19 INTEGER DEFAULT 0,
        e20 INTEGER DEFAULT 0,
        e21 INTEGER DEFAULT 0,
        e22 INTEGER DEFAULT 0
        );
    `);
    console.log('Table eastdiv créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table east:', error);
  } finally {
    client.release();
  }
}

async function insertData1() {
  const client = await pool.connect();

  try {
    // Modifiez la définition de la table pour ajouter les colonnes
    await client.query(`
      ALTER TABLE eastdiv
      ADD COLUMN e18 INTEGER DEFAULT 0,
      ADD COLUMN e19 INTEGER DEFAULT 0,
      ADD COLUMN e20 INTEGER DEFAULT 0,
      ADD COLUMN e21 INTEGER DEFAULT 0,
      ADD COLUMN e22 INTEGER DEFAULT 0
     `);

    console.log('Colonnes ajoutées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des colonnes:', error);
  } finally {
    client.release();
  }
}
// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 12; i++) {
      const query = `
        INSERT INTO eastdiv(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
      `;

      const values = [
        'aucun', 'aucun', 'aucun', 'aucun', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0
      ];

      await client.query(query, values);
      console.log(`Données insérées avec succès pour l'ID ${i}`);
    }
  } catch (error) {
    console.error("Erreur lors de l'insertion des données:", error);
  } finally {
    client.release();
  }
}
// Fonction pour récupérer toutes les données
async function getData(ide) {
  const client = await pool.connect();

  try {
   const query = 'SELECT e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22 FROM eastdiv WHERE id = $1';
    const result = await client.query(query, [ide]);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}


// Appeler la fonction createNorth1FicheTable après la création de la table
createEastDivTable();
//insertData();

module.exports = {
  createEastDivTable,
 insertData1,
//  insertData,
  getData
};
