const NFTs =[];                                                             //variable that hold NFT's
function mintNFT(name, entryTime,exitTime,idCardType,visitorType) {         //mintNFT function for object
   const NFT={                                                              //object that will hold the metadata for NFTs
         "Name":name,
         "Entry_time":entryTime,
         "Exit_Time":exitTime,
         "Id_Card_Type":idCardType,
         "Visitor_Type":visitorType
   }
   NFTs.push(NFT);                                                          //storing NFT in the variable NFTs 
   console.log("Minted:" + name);
}

function listNFTs () {                                                      //function that will print all of NFTs metadata 
 for(let j=0; j < NFTs.length; j++)
   {
      console.log("\nID: \t\t\t"+ (j+1));
      console.log("Name:\t\t\t" + NFTs[j].Name);
      console.log("Entry_time:\t\t" + NFTs[j].Entry_time);
      console.log("Exit_Time: \t\t" + NFTs[j].Exit_Time);
      console.log("Id_Card_Type: \t" + NFTs[j].Id_Card_Type);
      console.log("Visitor_Type:\t" + NFTs[j].Visitor_Type);
   }
}

function getTotalSupply() {                                                  //function that return the number of NFT's created
console.log("\n" + NFTs.length);
}

mintNFT('Diksha',"1:00 AM","2:00 AM","Fingerprint Scanner","Employee");
mintNFT('Shalu',"5:00 AM","8:20 AM","Smart Card","VIP Guest");
mintNFT('Shiksha',"3:00 PM","5:30 AM","Facial Recognition","Employee");
mintNFT('Kunal',"4:00 PM","5:40 PM","Magnetic Stripe Card","Board Member");
mintNFT('Abhay',"8:00 PM","11:50 PM","Smart Card","VIP Guest");
listNFTs();
getTotalSupply();
