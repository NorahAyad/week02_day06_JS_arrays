const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
//start (Bonus)
//map
let name=characters.map((element)=> element.name )

let height=characters.map((element)=> element.height )
//REDUCE

let name1=characters.reduce((acc,element)=> acc+element.height,0)
let name2=characters.reduce((acc,element)=> {
let color=element.eye_color;
if(acc[color]){
    acc[color]++;
}else{
    acc[color]=1;
}
return acc;

})

// FILTER 


let heightFilter=characters.filter((element)=> element.height <200)

let genderFilter=characters.filter((element)=> element.gender==="female")

//SORT
let sortByName=characters.sort((a,b)=>{
return a.mass-b.mass
}

);
let sortByheight=characters.sort((a,b)=>{
    return a.height-b.height
    }
    
    );

//Every
let all=characters.every((element)=> element.mass>=40)
let all1=characters.every((element)=> element.height<200)

//some
let someColor=characters.some((element)=> element.eye_color=== "blue")
let sometool=characters.some((element)=> element.heigh>200)

//end (Bonus)

const numbers = [1, 2, 3, 92, -10];

function sum(a,y){
    // [10,30,20]
    let z= false
    for( let i = 0; i < a.length; i++){

        if( y==a[i])
       z=true;// -> result = result + array[i] 
    }
 console.log(z);
    
}
function sum1(array,num3){
    for( let i = 0; i < array.length; i++){
        for( let j = i; j < array.length; j++){
            if (array[i] +array[j] ===num3)
            
            console.log(array[i]+ " "+array[j]);
    }
}

}
function sum4(array3){
    let count1=0;
        let count2=0;
    for( let i = 0; i < array3.length; i++){
        
            if (array3[i] %2==0){
                count1 +=1
            }else{
                count2 +=1 
            }
           
            
    }
    console.log(count1+ " "+count2)
}

