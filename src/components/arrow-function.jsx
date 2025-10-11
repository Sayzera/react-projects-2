

export const ArrowFunction = () => {

    function calculate(a,b, callback) {
        const result =callback(a,b);
         
        console.log('sonuc', result);
    }


    // calculate(2,3, (x,y) => {
    //     return x*y;

    // })


    calculate(4,4, function(a,b){
        return a+b
    })

    const persons = [
        {
            name: 'sezer'
        },
        {
            name: 'Emre'
        }
    ]


    const _map = (arr = [],callback) => {
            arr.forEach(item => {
                callback(item, 0)
            });
    }


    _map(persons, (item,index) => {
        console.log(item,index)
    })


   
    return (
        <div>Arrow Function</div>
    )
}