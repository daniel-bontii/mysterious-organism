// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  const pAequorFactory = (specimenNum , dna) => {
    return {
      specimenNum,
      dna,
      mutate(){
        const randomDnaIndex = Math.floor(Math.random()*this.dna.length)
        let newBase =  returnRandBase();
        while(this.dna[randomDnaIndex] === newBase){
          newBase = returnRandBase();
        }
        this.dna[randomDnaIndex] = newBase;
        return newBase;
      },
      compareDNA(objectIn){
        let totalSimilarities = 0;
        for(let i=0; i>this.dna.length; i++){
          for(let j=0; j<objectIn.length; j++){
            if(this.dna[i] === objectIn[j]){
              similarities++;
            }
          }
        }
        const similarityIndex = (totalSimilarities /this.dna.length) * 100;
        console.log(`${this.specimenNum} and ${objectIn.specimenNum} are ${similarityIndex}% DNA in common`);
      },
      willLikelySurvive() {
        const numOfCG = this.dna.filter(element => 
          element === 'C' || element === 'G'
        );
        const chanceOfSurvival = numOfCG.length /this.dna.length;
        if(chanceOfSurvival >= 0.6){
          return true;
        }else{
          return false;
        }
      }
    };
  }
  
  const thirtySurvivors = [];
  
  let surviviorsCounter = 1;
  
  while (thirtySurvivors.length < 30) {
    let newOrganism = pAequorFactory(surviviorsCounter, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
      thirtySurvivors.push(newOrganism);
    }
    surviviorsCounter++;
  }
  //console.log(pAequorFactory());
  console.log(thirtySurvivors);  