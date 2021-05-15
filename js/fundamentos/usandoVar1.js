// Var tem escopo global
{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera);

// Var tem escopo local em function
function teste() {
    var local = 123;
    console.log(local);

}

teste();
// console.log(local); "ReferenceError: local is not defined"