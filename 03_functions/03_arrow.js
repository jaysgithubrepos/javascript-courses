
const user={
    username:"jaichand",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username="Jaixha";
// user.welcomeMessage();
// console.log(this);
// function chaiandcode(){
//     let username="hitesh";
//     console.log(this);
// }
// chaiandcode();
// const chai =function(){
//     let username="jaichand";
//     console.log(this.username);

// }
// chai();
const chai =()=> {
    let username="GDO";
    console.log(this.username);
}
chai();
