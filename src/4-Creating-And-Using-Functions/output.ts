const prefix = '🐉 ';

export default async function updateOutput(id: string) {
  // TODO
}

//run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  //hoisted
  function displayProductInfo(id :number, name :string){
    console.log(`${prefix} typed parameters`);
    console.log('product id =${id} and name=${name}');
  }

  displayProductInfo(10, 'Pizza');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7,11));

  function addNumbersDeclaration(x: number, y: number) :number{
  const sum :number = x + y;
  return sum;
  }

  const addNumbersExpression = function(x: number, y: number){
    const sum: number  = x + y;
    return sum;
  };

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(77,111));

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-pizza-cream'
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fasd fa-cheese',
    },
  ];

  function getProductnames (){    return sampleProducts.map((p) => p.name);
  }
  console.log(`${prefix} return array`);
  console.log(getProductnames());
}