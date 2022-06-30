## Padrões que importam (ou alguns deles)

### Visitor

<hr>

### Template

O _pattern_ template é um método em uma superclasse, geralmente uma superclasse abstrata, e define o esqueleto de uma operação em termos de várias etapas de alto nível. Essas etapas são implementadas por métodos auxiliares adicionais na mesma classe que o método de modelo.

Os métodos auxiliares podem ser métodos abstratos, caso em que subclasses são necessárias para fornecer implementações concretas, ou métodos de gancho, que possuem corpos vazios na superclasse. As subclasses podem (mas não são obrigadas a) personalizar a operação substituindo os métodos de gancho. A intenção do método template é definir a estrutura geral da operação, enquanto permite que as subclasses refinem ou redefinam certas etapas

[Exemplo](/examples/template/index.ts)

<hr>

### Builder

O _pattern_ builder é um padrão de projeto projetado para fornecer uma solução flexível para vários problemas de criação de objetos na programação orientada a objetos. A intenção do padrão de projeto é separar a construção de um objeto complexo de sua representação. Normalmente o padrão é implementado através da relação entre um contrato, interface, e uma classe concreta que de fato "constrói" o objeto. Uma variação simplificada do padrão é quando determinada classe tem muitos atributos para serem preenchidos é dar nomes signfificatios aos setters e retornar sua popria instancia permitindo concataner a chamada de metodos.

[Exemplo](/examples/builder/index.ts)

<hr>

### Facade

O padrão facade é um padrão de design de software comumente usado em programação orientada a objetos. Análoga a uma fachada na arquitetura, uma facade é um objeto que serve como uma interface frontal que mascara um código subjacente ou estrutural mais complexo.

Forneça uma interface unificada para um conjunto de interfaces em um subsistema. O padrão define uma interface de nível superior que torna o subsistema mais fácil de usar.

[Exemplo](/examples/facade/index.ts)

<hr>

### Strategy

O padrão strategy é um padrão de design de software comportamental que permite selecionar um algoritmo em tempo de execução. Em vez de implementar um único algoritmo diretamente, o código recebe instruções em tempo de execução sobre qual em uma família de algoritmos usar.

[Exemplo](/examples/strategy/index.ts)

<hr>

### Matcher

<hr>

### Factory

O padrão factory é um padrão do tipo criacional que vem para facilitar a construção de objetos. Existem várias variações e implementação desse pattern como abstract factory, static factory e factory method. No fim todas tem o intuito de criar objetos de uma forma ou outra. Nesse caso o exemplo apresenta duas variações, static factory utilizando uma classe para instanciar de acordo com o parâmetro e outro utilizando currying. Uma outra variação mais ligada a legibilidade de código é o static factory method que consiste em substituir o construtor de uma classe por métodos estáticos com nomes mais semânticos e que por vezes facilitam a criação de objetos.

[Exemplo](/examples/factory/index.ts)

<hr>

### Handler

<hr>

### Fluent Builder

- https://computaria.gitlab.io/blog/2021/12/23/fluent-builder
