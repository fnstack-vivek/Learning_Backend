//Que 1=>Print each element
const arr1=[10,20,30,40];
for(let i=0;i<arr1.length;i++) console.log(arr1[i]);

//Que2=>Sum of array
const arr2=[1,2,3,4];
let t=0;
for(let i=0;i<arr2.length;i++) 
    t+=arr2[i];
console.log(t);

//Que3=>Maximum value
const arr3=[5,1,9,3];
let max=arr3[0];
for(let i=1;i<arr3.length;i++) 
    if(arr3[i]>max) max=arr3[i];
console.log(max);

//Que=>Minimum value
const arr4=[7,3,9,0];
let min=arr3[0];
for(let i=1;i<arr3.length;i++) 
    if(arr3[i]<min) 
    min=arr3[i];
console.log(min);

//Que5=>Reverse array
const arr5=[1,2,3];
let r5=[];
for(let i=arr5.length-1;i>=0;i--) r5.push(arr5[i]);
console.log(r5);

//Que6=>Remove duplicates
const arr6=[1,2,2,3,1];
let r6=[];
for(let i=0;i<arr6.length;i++) 
    if(!r6.includes(arr6[i])) r6.push(arr6[i]);
console.log(r6);

//Que7=>Frequency count
const arr7=['a','b','a','c'];
let o7={};
for(let i=0;i<arr7.length;i++) o7[arr7[i]]=(o7[arr7[i]]||0)+1;
console.log(o7);

//Que8=>Flatten array
const arr8=[1,[2,3],4];
let r8=[];
for(let i=0;i<arr8.length;i++)
     Array.isArray(arr8[i])?r8.push(...arr8[i]):r8.push(arr8[i]);
console.log(r8);

//Que9=>Rotate array
const arr9=[1,2,3,4];let k=1;
k%=arr9.length;
console.log([...arr9.slice(-k),...arr9.slice(0,-k)]);

//Que10=>Chunk array
const arr10=[1,2,3,4,5];let n=2,r10=[];
for(let i=0;i<arr10.length;i+=n) 
    r10.push(arr10.slice(i,i+n));
console.log(r10);

//Que=>Remove falsy values
const arr11=[0,1,false,2,'',3,null];
console.log(arr11.filter(Boolean));

//Que12=>Find index manually
const arr12=['a','b','c'];let x='b',idx=-1;
for(let i=0;i<arr12.length;i++)
     if(arr12[i]===x){
        idx=i;break;}
     console.log(idx);

//Que13=>Merge arrays
const a13=[1,2],b13=[3,4];
console.log([...a13,...b13]);

//Que14=>Interleave arrays
const a14=[1,2],b14=[10,20],r14=[];
let m=Math.max(a14.length,b14.length);
for(let i=0;i<m;i++){
    if(i<a14.length)r14.push(a14[i]);if(i<b14.length)r14.push(b14[i]);}
console.log(r14);

//Que15=>Sliding window sum
const arr15=[1,2,3,4];k=2;
let sum=0,r15=[];
for(let i=0;i<k;i++) sum+=arr15[i];
r15.push(sum);
for(let i=k;i<arr15.length;i++){
    sum+=arr15[i]-arr15[i-k];r15.push(sum);}
console.log(r15);

//Que16=>Range array
let s=3,e=6,r16=[];
for(let i=s;i<=e;i++) 
    r16.push(i);
console.log(r16);

//Que17=>Remove item by index
const arr17=[1,2,3];
let i17=1;
console.log([...arr17.slice(0,i17),...arr17.slice(i17+1)]);

//Que18=>Count condition
const arr18=[5,12,8,20];
let c=0;
for(let i=0;i<arr18.length;i++) 
    if(arr18[i]>10) c++;
    console.log(c);

//Que19=>Unique sorted array
const arr19=[3,1,2,3,2];
let u=[];
for(let i=0;i<arr19.length;i++) 
    if(!u.includes(arr19[i])) u.push(arr19[i]);
       u.sort((a,b)=>a-b);
        console.log(u);

//Que20=>Index map
const arr20=['a','b'];let o20={};
for(let i=0;i<arr20.length;i++) 
    o20[i]=arr20[i];
console.log(o20);