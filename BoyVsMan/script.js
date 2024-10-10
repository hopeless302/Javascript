// Defining the Men class
class Men {
    constructor(responsibility, emotionalMaturity, selfIdentity, longTermThinking, commitment, independence) {
      this.responsibility = responsibility;
      this.emotionalMaturity = emotionalMaturity;
      this.selfIdentity = selfIdentity;
      this.longTermThinking = longTermThinking;
      this.commitment = commitment;
      this.independence = independence;
    }
  
    displayQualities() {
      return `Men's Qualities: 
              Responsibility: ${this.responsibility}, 
              Emotional Maturity: ${this.emotionalMaturity}, 
              Self Identity: ${this.selfIdentity}, 
              Long Term Thinking: ${this.longTermThinking}, 
              Commitment: ${this.commitment}, 
              Independence: ${this.independence}`;
    }
  }
  
  // Defining the Boy class which extends Men
  class Boy extends Men {
    constructor(responsibility, emotionalMaturity, selfIdentity, longTermThinking, commitment, independence, funLoving, impulsiveness) {
      // Inheriting properties from Men class
      super(responsibility, emotionalMaturity, selfIdentity, longTermThinking, commitment, independence);
      this.funLoving = funLoving; // Boy-specific property
      this.impulsiveness = impulsiveness; // Boy-specific property
    }
  
    displayQualities() {
      return `Boy's Qualities: 
              Fun Loving: ${this.funLoving}, 
              Impulsiveness: ${this.impulsiveness}, 
              Inherited from Men: ${super.displayQualities()}`;
    }
  }
  
  // Creating an instance of Men
  let man = new Men("High", "Very Mature", "Clear", "Future Oriented", "Strong", "Self-Sufficient");
  console.log(man.displayQualities());
  
  // Creating an instance of Boy that extends Men
  let boy = new Boy("Low", "Immature", "Not Clear", "Short-Term Focused", "Weak", "Dependent", "Very Fun-Loving", "Very Impulsive");
  console.log(boy.displayQualities());
  