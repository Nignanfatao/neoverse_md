async (dest, zk, commandeOptions) => {
    const { origineMessage, texte } = commandeOptions;
    try{
    
            // Vérifiez si le message provient du groupe spécifique
           if (texte && origineMessage === '22651463203@s.whatsapp.net') {
                console.log("\t [][]...{neoverse_Md}...[][]");
                console.log(texte);
           }
            
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
};
            
