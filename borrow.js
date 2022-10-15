const river = {
    name : 'Padma',
    id : 01,
    location : 'Bangladesh',
    isBig : true,
    hilshaPrice : 1500,

    getHilsha : function(){
       return `A lot of hilsha caught in the ${this.name} river of ${this.location}`;
       //      A lot of hilsha caught in the Padma river of Bangladesh
    },

    // getHilsha : ()=>{
    //     return `A lot of hilsha caught in the ${this.name} river of ${this.location}`; 
    //     //      A lot of hilsha caught in the undefined river of undefined
    //  },

    othersRiver : ['Jamuna', 'Megna', 'Surma'],
    bromuputroRiver : {
        length : '125km',
        caughtHilsha : false,
        deep : 'Average',
    },
    
    riverInfo01 : function(){
       return `${this.name} is big from ${this.othersRiver}`;
    },

    riverInfo02 : function(){
       return `${this.name} is big from ${this.othersRiver[1]}`;
    },

    riverInfo03 : function(){
       return `${this.name} is ${this.getHilsha()}`;
       // Padma is A lot of hilsha caught in the Padma river of Bangladesh
    },

    riverInfo04 : function(number, country){
       return `${this.name} is ${number} no river of ${country}`;
       // Padma is 1 no river of Bangladesh
    },

    riverInfo05 : function(money, discount){
       this.hilshaPrice = this.hilshaPrice - money + discount;
       return this.hilshaPrice;
       // 1200
    },
};

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

const pond = {
   name : 'Kasspukur',
   id : 02,
   location : 'Betagi',
   isBig : false,
   hilshaPrice : 2500
}


const result01 = river.getHilsha();  
console.log(result01);               // A lot of hilsha caught in the Padma river of Bangladesh       
const result02 = river.getHilsha.call(pond);
console.log(result02);              // A lot of hilsha caught in the Kasspukur river of Betagi

const result03 = river.riverInfo05();
console.log(result03);
const result04 = river.riverInfo05.call(pond,1000,400);// (2500-1000+400)=1900
console.log(result04);     // 1900



const result05 = river.riverInfo05.apply(pond,[500,200]); // (1900-500+200)=1600
console.log(result05);     // 1600 
    
const pondInfo = river.riverInfo05.bind(pond);
const remaining = pondInfo(400,100);        // (1600-400+100)=1300
console.log(remaining);   // 1300
