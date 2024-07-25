async (dest, zk, commandeOptions) => {
    const { origineMessage, texte } = commandeOptions;
    try{
    
            // Vérifiez si le message provient du groupe spécifique
            if (origineMessage === '120363307444088356@g.us') {
                console.log("\t [][]...{neoverse_Md}...[][]");
                console.log(texte);
            }
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
};
            
