const { Pool } = require("pg");

var dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
const proConfig = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

const pool = new Pool(proConfig);

async function createElFicheTable() {
  const client = await pool.connect();

  try {
    // Créez la table elfiche si elle n'existe pas déjà
    await client.query(`
      CREATE TABLE IF NOT EXISTS elfiche(
        id SERIAL PRIMARY KEY,
        e1 TEXT DEFAULT 'aucun',
        e2 INTEGER DEFAULT 0,
        e3 INTEGER DEFAULT 0,
        e4 INTEGER DEFAULT 0,
        e5 INTEGER DEFAULT 0,
        e6 INTEGER DEFAULT 0,
        e7 INTEGER DEFAULT 0,
        e8 TEXT DEFAULT 'aucun',
        e9 INTEGER DEFAULT 0,
        e10 INTEGER DEFAULT 0,
        e11 INTEGER DEFAULT 0,
        e12 INTEGER DEFAULT 0,
        e13 INTEGER DEFAULT 0,
        e14 INTEGER DEFAULT 0,
        e15 TEXT DEFAULT 'aucun',
        e16 INTEGER DEFAULT 0,
        e17 INTEGER DEFAULT 0,
        e18 INTEGER DEFAULT 0,
        e19 INTEGER DEFAULT 0,
        e20 INTEGER DEFAULT 0,
        e21 INTEGER DEFAULT 0,
        e22 TEXT DEFAULT 'aucun',
        e23 INTEGER DEFAULT 0,
        e24 INTEGER DEFAULT 0,
        e25 INTEGER DEFAULT 0,
        e26 INTEGER DEFAULT 0,
        e27 INTEGER DEFAULT 0,
        e28 INTEGER DEFAULT 0,
        e29 TEXT DEFAULT 'aucun',
        e30 INTEGER DEFAULT 0,
        e31 INTEGER DEFAULT 0,
        e32 INTEGER DEFAULT 0,
        e33 INTEGER DEFAULT 0,
        e34 INTEGER DEFAULT 0,
        e35 INTEGER DEFAULT 0
       );
    `);
    console.log('Table elfiche créée avec succès');
  } catch (error) {
    console.error('Erreur lors de la création de la table elfiche:', error);
  } finally {
    client.release();
  }
}

/*async function insertData1() {
  const client = await pool.connect();

  try {
    // Modifiez la définition de la table pour ajouter les colonnes
    await client.query(`
      ALTER TABLE elfiche
     `);

    console.log('Colonnes ajoutées avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'ajout des colonnes:', error);
  } finally {
    client.release();
  }
}*/
// Fonction pour insérer des données
async function insertData() {
  const client = await pool.connect();
  try {
    for (let i = 1; i <= 12; i++) {
      const query = `
        INSERT INTO elfiche(e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35)
      `;

      const values = [
        'aucun', 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0, 0, 'aucun', 0, 0, 0, 0, 0, 0
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
   const query = 'SELECT e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19, e20, e21, e22, e23, e24, e25, e26, e27, e28, e29, e30, e31, e32, e33, e34, e35 FROM elfiche WHERE id = $1';
    const result = await client.query(query, [ide]);

    return result.rows[0];
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  } finally {
    client.release();
  }
}


// Appeler la fonction createNorth1FicheTable après la création de la table
createElFicheTable();
//insertData();

module.exports = {
  createElFicheTable,
 // insertData1,
  insertData,
  getData
};
