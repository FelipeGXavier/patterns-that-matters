## Padrões que importam (ou alguns deles)

### Visitor
### Template

O *pattern* template é um método em uma superclasse, geralmente uma superclasse abstrata, e define o esqueleto de uma operação em termos de várias etapas de alto nível. Essas etapas são implementadas por métodos auxiliares adicionais na mesma classe que o método de modelo.

Os métodos auxiliares podem ser métodos abstratos, caso em que subclasses são necessárias para fornecer implementações concretas, ou métodos de gancho, que possuem corpos vazios na superclasse. As subclasses podem (mas não são obrigadas a) personalizar a operação substituindo os métodos de gancho. A intenção do método template é definir a estrutura geral da operação, enquanto permite que as subclasses refinem ou redefinam certas etapas

### Builder
### Facade
### Strategy
### Matcher
### Handler
### Fluent Builder  
- https://computaria.gitlab.io/blog/2021/12/23/fluent-builder